<?php

/* this is auto generated file */
return [
    [
        'driver' => 'MetaFox\\Friend\\Models\\Friend',
        'type'   => 'entity',
        'name'   => 'friend',
    ],
    [
        'driver' => 'MetaFox\\Friend\\Models\\FriendList',
        'type'   => 'entity',
        'name'   => 'friend_list',
    ],
    [
        'driver' => 'MetaFox\\Friend\\Models\\FriendListData',
        'type'   => 'entity',
        'name'   => 'friend_list_data',
    ],
    [
        'driver' => 'MetaFox\\Friend\\Models\\FriendRequest',
        'type'   => 'entity',
        'name'   => 'friend_request',
    ],
    [
        'driver' => 'MetaFox\\Friend\\Models\\FriendSuggestionIgnore',
        'type'   => 'entity',
        'name'   => 'friend_suggestion_ignore',
    ],
    [
        'driver' => 'MetaFox\\Friend\\Models\\TagFriend',
        'type'   => 'entity',
        'name'   => 'tag_friend',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendList\\AddItemsMobileForm',
        'type'       => 'form',
        'name'       => 'friend.friend_list.add_items',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendList\\AddItemsForm',
        'type'       => 'form',
        'name'       => 'friend.friend_list.add_items',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendList\\CreateFriendListForm',
        'type'       => 'form',
        'name'       => 'friend.friend_list.store',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendList\\CreateFriendListMobileForm',
        'type'       => 'form',
        'name'       => 'friend.friend_list.store',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendList\\EditFriendListMobileForm',
        'type'       => 'form',
        'name'       => 'friend.friend_list.update',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendList\\EditFriendListForm',
        'type'       => 'form',
        'name'       => 'friend.friend_list.update',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\Friend\\SearchFriendMobileForm',
        'type'       => 'form',
        'name'       => 'friend.search',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_preload' => 1,
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\Admin\\SiteSettingForm',
        'type'       => 'form-settings',
        'name'       => 'friend',
        'version'    => 'v1',
        'resolution' => 'admin',
        'title'      => 'core::phrase.settings',
        'url'        => '/admincp/friend/setting',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\Friend\\FriendEmbedCollection',
        'type'    => 'json-collection',
        'name'    => 'friend.embed',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\Friend\\FriendItemCollection',
        'type'    => 'json-collection',
        'name'    => 'friend.item',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\Friend\\FriendSimpleCollection',
        'type'    => 'json-collection',
        'name'    => 'friend.simple',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendList\\FriendListItemCollection',
        'type'    => 'json-collection',
        'name'    => 'friend_list.item',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\Friend\\FriendEmbed',
        'type'    => 'json-resource',
        'name'    => 'friend.embed',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\Friend\\FriendItem',
        'type'    => 'json-resource',
        'name'    => 'friend.item',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\Friend\\FriendSimple',
        'type'    => 'json-resource',
        'name'    => 'friend.simple',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendList\\FriendListDetail',
        'type'    => 'json-resource',
        'name'    => 'friend_list.detail',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendList\\FriendListItem',
        'type'    => 'json-resource',
        'name'    => 'friend_list.item',
        'version' => 'v1',
    ],
    [
        'driver' => 'MetaFox\\Friend\\Notifications\\FriendAccepted',
        'type'   => 'notification',
        'name'   => 'friend_accepted',
    ],
    [
        'driver' => 'MetaFox\\Friend\\Notifications\\FriendRequested',
        'type'   => 'notification',
        'name'   => 'friend_requested',
    ],
    [
        'driver' => 'MetaFox\\Friend\\Notifications\\FriendTag',
        'type'   => 'notification',
        'name'   => 'friend_tag',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\MobileSetting',
        'type'    => 'package-mobile',
        'name'    => 'friend',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\PackageSetting',
        'type'    => 'package-setting',
        'name'    => 'friend',
        'version' => 'v1',
    ],
    [
        'driver'  => 'MetaFox\\Friend\\Http\\Resources\\v1\\WebSetting',
        'type'    => 'package-web',
        'name'    => 'friend',
        'version' => 'v1',
    ],
    [
        'driver' => 'MetaFox\\Friend\\Policies\\FriendPolicy',
        'type'   => 'policy-resource',
        'name'   => 'MetaFox\\Friend\\Models\\Friend',
    ],
    [
        'driver' => 'MetaFox\\Friend\\Policies\\FriendListPolicy',
        'type'   => 'policy-resource',
        'name'   => 'MetaFox\\Friend\\Models\\FriendList',
    ],
    [
        'driver' => 'MetaFox\\Friend\\Policies\\FriendRequestPolicy',
        'type'   => 'policy-resource',
        'name'   => 'MetaFox\\Friend\\Models\\FriendRequest',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\Friend\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'friend',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendList\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'friend_list',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendRequest\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'friend_request',
        'version'    => 'v1',
        'resolution' => 'mobile',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\Friend\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'friend',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendList\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'friend_list',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
    [
        'driver'     => 'MetaFox\\Friend\\Http\\Resources\\v1\\FriendRequest\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'friend_request',
        'version'    => 'v1',
        'resolution' => 'web',
    ],
];