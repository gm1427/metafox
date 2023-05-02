<?php

/* this is auto generated file */
return [
    [
        'subInfo'  => 'photo::phrase.browse_photos_from_people_you_may_like',
        'menu'     => 'core.dropdownMenu',
        'name'     => 'photos',
        'label'    => 'photo::phrase.photos',
        'ordering' => 8,
        'icon'     => 'ico-photos-alt',
        'to'       => '/photo',
    ],
    [
        'subInfo'  => 'photo::phrase.browse_photos_from_people_you_may_like',
        'menu'     => 'core.primaryMenu',
        'name'     => 'photos',
        'label'    => 'photo::phrase.photos',
        'ordering' => 8,
        'icon'     => 'ico-photos-alt',
        'to'       => '/photo',
    ],
    [
        'tab'      => 'photo',
        'showWhen' => [
            'or',
            ['eq', 'item.reg_method', '0'],
            ['truthy', 'acl.group.group.moderate'],
            ['truthy', 'item.is_member'],
        ],
        'menu'     => 'group.group.profileMenu',
        'name'     => 'photo',
        'label'    => 'photo::phrase.photos',
        'ordering' => 5,
        'to'       => '/photo',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'acl.photo.photo.view'],
        ],
        'menu'     => 'group.searchWebCategoryMenu',
        'name'     => 'photo',
        'label'    => 'photo::phrase.photo_global_search_label',
        'ordering' => 5,
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'acl.photo.photo_album.view'],
        ],
        'menu'     => 'group.searchWebCategoryMenu',
        'name'     => 'photo_album',
        'label'    => 'photo::phrase.photo_album_global_search_label',
        'ordering' => 5,
    ],
    [
        'tab'      => 'photo',
        'showWhen' => [
            'and',
            ['truthy', 'item.profile_settings.photo_view_browse_photos'],
            [
                'or',
                ['truthy', 'acl.photo.photo.view'],
                ['truthy', 'acl.photo.photo_album.view'],
            ],
        ],
        'menu'     => 'page.page.profileMenu',
        'name'     => 'photo',
        'label'    => 'photo::phrase.photos',
        'ordering' => 4,
        'to'       => '/photo',
    ],
    [
        'tab'      => 'album',
        'showWhen' => [
            'and',
            ['truthy', 'acl.photo.photo_album.create'],
            ['truthy', 'item.profile_settings.photo_album_share_albums'],
            ['falsy', 'item.is_muted'],
            ['falsy', 'item.is_pending'],
        ],
        'menu'     => 'photo.photo.headerItemActionOnGroupProfileMenu',
        'name'     => 'album',
        'label'    => 'photo::phrase.add_album',
        'ordering' => 1,
        'as'       => 'photo.ui.addPhotoAlbum',
    ],
    [
        'tab'      => 'media',
        'showWhen' => [
            'and',
            ['falsy', 'item.is_muted'],
            ['falsy', 'item.is_pending'],
            ['truthy', 'acl.photo.photo.create'],
            ['truthy', 'item.profile_settings.photo_share_photos'],
        ],
        'menu'     => 'photo.photo.headerItemActionOnGroupProfileMenu',
        'name'     => 'media',
        'label'    => 'add_photo_video_create_menu',
        'ordering' => 2,
        'as'       => 'feed.ui.addPhotoButton',
    ],
    [
        'tab'      => 'album',
        'showWhen' => [
            'and',
            ['truthy', 'acl.photo.photo_album.create'],
            ['truthy', 'item.profile_settings.photo_album_share_albums'],
            ['falsy', 'item.is_pending'],
        ],
        'menu'     => 'photo.photo.headerItemActionOnPageProfileMenu',
        'name'     => 'album',
        'label'    => 'photo::phrase.add_album',
        'ordering' => 1,
        'as'       => 'photo.ui.addPhotoAlbum',
    ],
    [
        'tab'      => 'media',
        'showWhen' => [
            'and',
            ['truthy', 'acl.photo.photo.create'],
            ['truthy', 'item.profile_settings.photo_share_photos'],
            ['falsy', 'item.is_pending'],
        ],
        'menu'     => 'photo.photo.headerItemActionOnPageProfileMenu',
        'name'     => 'media',
        'label'    => 'add_photo_video_create_menu',
        'ordering' => 2,
        'as'       => 'feed.ui.addPhotoButton',
    ],
    [
        'tab'      => 'album',
        'showWhen' => [
            'and',
            ['truthy', 'acl.photo.photo_album.create'],
            ['truthy', 'item.is_owner'],
        ],
        'menu'     => 'photo.photo.headerItemActionOnUserProfileMenu',
        'name'     => 'album',
        'label'    => 'photo::phrase.add_album',
        'ordering' => 1,
        'as'       => 'photo.ui.addPhotoAlbum',
    ],
    [
        'tab'      => 'media',
        'showWhen' => [
            'and',
            ['truthy', 'item.is_owner'],
            ['truthy', 'acl.photo.photo.create'],
        ],
        'menu'     => 'photo.photo.headerItemActionOnUserProfileMenu',
        'name'     => 'media',
        'label'    => 'add_photo_video_create_menu',
        'ordering' => 2,
        'as'       => 'feed.ui.addPhotoButton',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_edit'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'edit',
        'label'    => 'photo::phrase.edit_photo',
        'ordering' => 1,
        'value'    => 'closeDialog, editItem',
        'icon'     => 'ico-photos-alt-o',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_approve'],
            ['truthy', 'item.is_pending'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'approve',
        'label'    => 'core::phrase.approve',
        'ordering' => 2,
        'value'    => 'approveItem',
        'icon'     => 'ico-check-circle-o',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_set_profile_avatar'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'make-avatar',
        'label'    => 'photo::phrase.make_profile_picture',
        'ordering' => 2,
        'value'    => 'updateAvatarFromPhoto',
        'icon'     => 'ico-user-circle-o',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_set_profile_cover'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'make-cover',
        'label'    => 'photo::phrase.make_cover_photo',
        'ordering' => 3,
        'value'    => 'updateCoverFromListingPhoto',
        'icon'     => 'ico-photo-star-o',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_download'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'download-photo',
        'label'    => 'photo::phrase.download',
        'ordering' => 4,
        'value'    => 'photo/downloadItem',
        'icon'     => 'ico-download',
    ],
    [
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'block_divider_1',
        'ordering' => 7,
        'as'       => 'divider',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_sponsor'],
            ['falsy', 'item.is_sponsor'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'sponsor',
        'label'    => 'photo::phrase.sponsor_this_item',
        'ordering' => 8,
        'value'    => 'sponsorItem',
        'icon'     => 'ico-diamond-o',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_set_parent_cover'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'make-parent-cover',
        'label'    => 'photo::phrase.make_owner_type_name_s_cover_photo',
        'ordering' => 9,
        'value'    => 'updateParentCoverFromPhoto',
        'icon'     => 'ico-photo',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_set_parent_avatar'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'make-parent-avatar',
        'label'    => 'photo::phrase.make_owner_type_name_s_avatar_photo',
        'ordering' => 10,
        'value'    => 'updateParentAvatarPhoto',
        'icon'     => 'ico-photo',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_sponsor'],
            ['truthy', 'item.is_sponsor'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'unsponsor',
        'label'    => 'photo::phrase.unsponsor_this_item',
        'ordering' => 9,
        'value'    => 'unsponsorItem',
        'icon'     => 'ico-diamond-o',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_sponsor_in_feed'],
            ['falsy', 'item.is_sponsored_feed'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'sponsor_in_feed',
        'label'    => 'photo::phrase.sponsor_in_feed',
        'ordering' => 10,
        'value'    => 'sponsorItemInFeed',
        'icon'     => 'ico-diamond-o',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_sponsor_in_feed'],
            ['truthy', 'item.is_sponsored_feed'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'unsponsor_in_feed',
        'label'    => 'photo::phrase.unsponsor_in_feed',
        'ordering' => 11,
        'value'    => 'unsponsorItemInFeed',
        'icon'     => 'ico-diamond-o',
    ],
    [
        'showWhen' => [
            'and',
            ['falsy', 'item.is_featured'],
            ['truthy', 'item.extra.can_feature'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'feature',
        'label'    => 'core::phrase.feature',
        'ordering' => 12,
        'value'    => 'featureItem',
        'icon'     => 'ico-star-o',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.is_featured'],
            ['truthy', 'item.extra.can_feature'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'unfeature',
        'label'    => 'core::phrase.un_feature',
        'ordering' => 13,
        'value'    => 'unfeatureItem',
        'icon'     => 'ico-star-o',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_delete'],
        ],
        'menu'     => 'photo.photo.itemActionMenu',
        'name'     => 'block_divider_2',
        'ordering' => 14,
        'as'       => 'divider',
    ],
    [
        'showWhen' => [
            'or',
            ['truthy', 'item.extra.can_delete'],
            ['truthy', 'item.extra.can_delete_own'],
        ],
        'className' => 'itemDelete',
        'menu'      => 'photo.photo.itemActionMenu',
        'name'      => 'delete',
        'label'     => 'photo::phrase.delete',
        'ordering'  => 15,
        'value'     => 'deleteItem',
        'icon'      => 'ico-trash-alt-o',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_edit'],
        ],
        'menu'     => 'photo.photo_album.itemActionMenu',
        'name'     => 'edit',
        'label'    => 'photo::phrase.edit_photo_album',
        'ordering' => 1,
        'value'    => 'editItem',
        'icon'     => 'ico-pencilline-o',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_sponsor_in_feed'],
            ['greater', 'item.statistic.total_item', '0'],
            ['falsy', 'item.is_sponsored_feed'],
        ],
        'menu'     => 'photo.photo_album.itemActionMenu',
        'name'     => 'sponsor_in_feed',
        'label'    => 'photo::phrase.sponsor_in_feed',
        'ordering' => 3,
        'value'    => 'sponsorItemInFeed',
        'icon'     => 'ico-sponsor',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_sponsor_in_feed'],
            ['truthy', 'item.is_sponsored_feed'],
        ],
        'menu'     => 'photo.photo_album.itemActionMenu',
        'name'     => 'unsponsor_in_feed',
        'label'    => 'photo::phrase.unsponsor_in_feed',
        'ordering' => 4,
        'value'    => 'unsponsorItemInFeed',
        'icon'     => 'ico-sponsor',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_sponsor'],
            ['greater', 'item.statistic.total_item', '0'],
            ['falsy', 'item.is_sponsor'],
        ],
        'menu'     => 'photo.photo_album.itemActionMenu',
        'name'     => 'sponsor',
        'label'    => 'photo::phrase.sponsor_this_item',
        'ordering' => 5,
        'value'    => 'sponsorItem',
        'icon'     => 'ico-sponsor',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_sponsor'],
            ['truthy', 'item.is_sponsor'],
        ],
        'menu'     => 'photo.photo_album.itemActionMenu',
        'name'     => 'unsponsor',
        'label'    => 'photo::phrase.unsponsor_this_item',
        'ordering' => 6,
        'value'    => 'unsponsorItem',
        'icon'     => 'ico-sponsor',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_feature'],
            ['falsy', 'item.is_featured'],
            ['greater', 'item.statistic.total_item', '0'],
        ],
        'menu'     => 'photo.photo_album.itemActionMenu',
        'name'     => 'feature',
        'label'    => 'core::phrase.feature',
        'ordering' => 7,
        'value'    => 'featureItem',
        'icon'     => 'ico-diamond',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'item.extra.can_feature'],
            ['truthy', 'item.is_featured'],
        ],
        'menu'     => 'photo.photo_album.itemActionMenu',
        'name'     => 'unfeature',
        'label'    => 'core::phrase.un_feature',
        'ordering' => 8,
        'value'    => 'unfeatureItem',
        'icon'     => 'ico-diamond',
    ],
    [
        'showWhen' => [
            'or',
            ['truthy', 'item.extra.can_delete'],
            ['truthy', 'item.extra.can_delete_own'],
        ],
        'menu'     => 'photo.photo_album.itemActionMenu',
        'name'     => 'delete',
        'label'    => 'photo::phrase.delete',
        'ordering' => 11,
        'value'    => 'deleteItem',
        'icon'     => 'ico-trash',
    ],
    [
        'tab'      => 'landing',
        'menu'     => 'photo.sidebarMenu',
        'name'     => 'landing',
        'label'    => 'photo::phrase.home',
        'ordering' => 1,
        'icon'     => 'ico-photo-o',
        'to'       => '/photo',
    ],
    [
        'tab'      => 'all',
        'menu'     => 'photo.sidebarMenu',
        'name'     => 'all',
        'label'    => 'photo::phrase.all_photos',
        'ordering' => 2,
        'icon'     => 'ico-photos-alt-o',
        'to'       => '/photo/all',
    ],
    [
        'tab'      => 'my',
        'showWhen' => [
            'and',
            ['truthy', 'session.loggedIn'],
        ],
        'menu'     => 'photo.sidebarMenu',
        'name'     => 'my',
        'label'    => 'photo::phrase.my_photos',
        'ordering' => 3,
        'icon'     => 'ico-user-man-o',
        'to'       => '/photo/my',
    ],
    [
        'tab'      => 'my_pending',
        'showWhen' => [
            'and',
            ['truthy', 'session.loggedIn'],
        ],
        'menu'     => 'photo.sidebarMenu',
        'name'     => 'my_pending',
        'label'    => 'photo::phrase.my_pending_photos',
        'ordering' => 4,
        'icon'     => 'ico-user1-clock-o',
        'to'       => '/photo/my-pending',
    ],
    [
        'tab'      => 'friend',
        'showWhen' => [
            'and',
            ['truthy', 'session.loggedIn'],
        ],
        'menu'     => 'photo.sidebarMenu',
        'name'     => 'friend',
        'label'    => 'photo::phrase.friends_photos',
        'ordering' => 5,
        'icon'     => 'ico-user1-two-o',
        'to'       => '/photo/friend',
    ],
    [
        'tab'      => 'all_albums',
        'menu'     => 'photo.sidebarMenu',
        'name'     => 'all_albums',
        'label'    => 'photo::phrase.all_albums',
        'ordering' => 6,
        'icon'     => 'ico-photos',
        'to'       => '/photo/albums',
    ],
    [
        'tab'      => 'my_albums',
        'showWhen' => [
            'and',
            ['truthy', 'session.loggedIn'],
        ],
        'menu'     => 'photo.sidebarMenu',
        'name'     => 'my_albums',
        'label'    => 'photo::phrase.my_albums',
        'ordering' => 7,
        'icon'     => 'ico-user-man-o',
        'to'       => '/photo/my-albums',
    ],
    [
        'tab'      => 'pending',
        'showWhen' => [
            'or',
            ['truthy', 'acl.photo.photo.approve'],
        ],
        'menu'     => 'photo.sidebarMenu',
        'name'     => 'pending',
        'label'    => 'photo::phrase.pending_photos',
        'ordering' => 8,
        'icon'     => 'ico-clock-o',
        'to'       => '/photo/pending',
    ],
    [
        'buttonProps' => [
            'fullWidth' => true,
            'color'     => 'primary',
            'variant'   => 'contained',
        ],
        'showWhen' => [
            'and',
            ['truthy', 'session.loggedIn'],
            ['truthy', 'acl.photo.photo.create'],
        ],
        'menu'     => 'photo.sidebarMenu',
        'name'     => 'add',
        'label'    => 'photo::phrase.upload_photos',
        'ordering' => 9,
        'as'       => 'sidebarButton',
        'icon'     => 'ico-plus',
        'to'       => '/photo/add',
    ],
    [
        'buttonProps' => [
            'fullWidth' => true,
            'color'     => 'primary',
            'variant'   => 'contained',
        ],
        'showWhen' => [
            'and',
            ['truthy', 'session.loggedIn'],
            ['truthy', 'acl.photo.photo_album.create'],
        ],
        'menu'     => 'photo.sidebarMenu',
        'name'     => 'add_album',
        'label'    => 'photo::phrase.create_new_album',
        'ordering' => 10,
        'as'       => 'sidebarButton',
        'icon'     => 'ico-plus',
        'to'       => '/photo/album/add',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'acl.photo.photo.view'],
        ],
        'menu'     => 'search.webCategoryMenu',
        'name'     => 'photo',
        'label'    => 'photo::phrase.photo_global_search_label',
        'ordering' => 10,
        'to'       => '/search/photo',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'acl.photo.photo_album.view'],
        ],
        'menu'     => 'search.webCategoryMenu',
        'name'     => 'photo_album',
        'label'    => 'photo::phrase.photo_album_global_search_label',
        'ordering' => 10,
        'to'       => '/search/photo_album',
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'acl.photo.photo.view'],
        ],
        'menu'     => 'search.webCategoryOrderingMenu',
        'name'     => 'photo',
        'label'    => 'photo::phrase.photo_global_search_label',
        'ordering' => 3,
    ],
    [
        'showWhen' => [
            'and',
            ['truthy', 'acl.photo.photo_album.view'],
        ],
        'menu'     => 'search.webCategoryOrderingMenu',
        'name'     => 'photo_album',
        'label'    => 'photo::phrase.photo_album_global_search_label',
        'ordering' => 3,
    ],
    [
        'tab'      => 'photo',
        'showWhen' => [
            'and',
            ['truthy', 'item.profile_settings.photo_display_on_profile'],
            ['truthy', 'item.profile_menu_settings.photo_profile_menu'],
        ],
        'menu'     => 'user.user.profileMenu',
        'name'     => 'photo',
        'label'    => 'photo::phrase.photos',
        'ordering' => 4,
        'to'       => '/photo',
    ],
];