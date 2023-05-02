import { Link, useGlobal } from '@metafox/framework';
import {
  ButtonList,
  FormatDate,
  ItemMedia,
  ItemSummary,
  ItemText,
  ItemTitle,
  ItemView,
  LineIcon,
  Statistic,
  UserAvatar
} from '@metafox/ui';
import { PagesItemProps, RESOURCE_PAGE_BLOCK } from '@metafox/pages';
import { IconButton, Typography, Tooltip } from '@mui/material';
import * as React from 'react';

export default function PageMemberItem({
  item,
  user,
  identity,
  state,
  handleAction,
  actions,
  itemProps,
  wrapAs,
  wrapProps
}: PagesItemProps) {
  const { ItemActionMenu, i18n, dispatch, useSession, useIsMobile } =
    useGlobal();

  const session = useSession();
  const isMobile = useIsMobile();

  if (!item) return null;

  const { statistic, full_name, user_name, city_location, joined, extra } =
    user;
  const to = `/${user_name}`;

  const handleOpenChatRoom = () => {
    dispatch({
      type: 'chat/room/openChatRoom',
      payload: {
        identity: user._identity,
        isMobile
      }
    });
  };

  return (
    <ItemView
      testid={'gropMemberItem'}
      wrapAs={wrapAs}
      wrapProps={wrapProps}
      data-testid={`itemview ${item.resource_name}`}
      data-eid={identity}
    >
      <ItemMedia>
        <UserAvatar user={user} size={80} />
      </ItemMedia>
      <ItemText>
        <ItemTitle>
          <Link
            to={to}
            children={full_name}
            color={'inherit'}
            hoverCard={`/user/${user.id}`}
          />
        </ItemTitle>
        <ItemSummary>
          {statistic?.total_mutual && user?.id !== session?.user?.id ? (
            <div role="button" onClick={actions?.presentMutualFriends}>
              <Statistic values={statistic} display="total_mutual" />
            </div>
          ) : (
            <Typography variant="body2">
              {city_location ||
                i18n.formatMessage(
                  {
                    id: 'joined_at'
                  },
                  {
                    joined_date: () => (
                      <FormatDate
                        data-testid="publishedDate"
                        value={joined}
                        format="MMMM DD, yyyy"
                      />
                    )
                  }
                )}
            </Typography>
          )}
        </ItemSummary>
      </ItemText>
      <ButtonList>
        {extra.can_message ? (
          <IconButton
            variant="outlined-square"
            size="medium"
            color="primary"
            onClick={handleOpenChatRoom}
          >
            <LineIcon icon={'ico-comment-o'} />
          </IconButton>
        ) : null}
        {item.resource_name === RESOURCE_PAGE_BLOCK && (
          <Tooltip title={i18n.formatMessage({ id: 'unblock_member' })}>
            <IconButton
              variant="outlined-square"
              size="medium"
              color="primary"
              onClick={actions.unblockMember}
            >
              <LineIcon icon={'ico-ban'} />
            </IconButton>
          </Tooltip>
        )}
        {itemProps.showActionMenu ? (
          <ItemActionMenu
            autoHide
            identity={identity}
            state={state}
            handleAction={handleAction}
            size="medium"
            variant="outlined-square"
            color="primary"
            icon="ico-dottedmore-o"
            tooltipTitle={i18n.formatMessage({ id: 'more_options' })}
          />
        ) : null}
      </ButtonList>
    </ItemView>
  );
}
