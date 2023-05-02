<?php

/* this is auto generated file */
return [
    [
        'tab'        => 'transactions',
        'menu'       => 'activitypoint.sidebarMenu',
        'name'       => 'transactions',
        'label'      => 'activitypoint::phrase.point_transactions',
        'ordering'   => 1,
        'icon'       => 'ico-stats-dots',
        'to'         => '/activitypoint/transactions',
        'is_deleted' => true,
    ],
    [
        'tab'      => 'landing',
        'menu'     => 'activitypoint.sidebarMenu',
        'name'     => 'landing',
        'label'    => 'activitypoint::phrase.statistics',
        'ordering' => 1,
        'icon'     => 'ico-stats-dots',
        'to'       => '/activitypoint',
    ],
    [
        'tab'      => 'packages',
        'showWhen' => ['truthy', 'acl.activitypoint.activitypoint.can_purchase_points'],
        'menu'     => 'activitypoint.sidebarMenu',
        'name'     => 'packages',
        'label'    => 'activitypoint::phrase.point_packages',
        'ordering' => 2,
        'icon'     => 'ico-folders-o',
        'to'       => '/activitypoint/packages',
    ],
    [
        'tab'      => 'how-to-earn',
        'menu'     => 'activitypoint.sidebarMenu',
        'name'     => 'how_to_earn',
        'label'    => 'activitypoint::phrase.how_to_earn',
        'ordering' => 3,
        'icon'     => ' ico-crown-o',
        'to'       => '/activitypoint/how-to-earn',
    ],
    [
        'tab'      => 'transactions-history',
        'menu'     => 'activitypoint.sidebarMenu',
        'name'     => 'transactions_history',
        'label'    => 'activitypoint::phrase.transactions_history',
        'ordering' => 4,
        'as'       => '',
        'icon'     => 'ico-clock-o',
        'to'       => '/activitypoint/transactions-history',
    ],
    [
        'tab'      => 'package_transactions',
        'menu'     => 'activitypoint.sidebarMenu',
        'name'     => 'package_transactions',
        'label'    => 'activitypoint::phrase.package_transactions',
        'ordering' => 5,
        'as'       => '',
        'icon'     => 'ico-box-o',
        'to'       => '/activitypoint/transactions-package',
    ],
    [
        'menu'     => 'core.accountMenu',
        'name'     => 'activity_points',
        'label'    => 'activitypoint::phrase.activity_points',
        'ordering' => 3,
        'icon'     => 'ico-star-circle-o',
        'to'       => '/activitypoint',
    ],
    [
        'subInfo'  => 'activitypoint::phrase.manage_your_activity_points',
        'menu'     => 'core.dropdownMenu',
        'name'     => 'activitypoint',
        'label'    => 'activitypoint::phrase.activity_points',
        'ordering' => 4,
        'icon'     => 'ico-star-circle-o',
        'to'       => '/activitypoint',
    ],
    [
        'color'    => 'primary',
        'showWhen' => [
            'and',
            ['neq', 'item.friendship', 5],
            ['truthy', 'item.extra.can_gift_activity_point'],
        ],
        'menu'     => 'user.user.profileActionMenu',
        'name'     => 'gift_points',
        'label'    => 'activitypoint::phrase.gift_points',
        'ordering' => 14,
        'value'    => 'getGiftForm',
        'icon'     => 'ico-gift-o',
    ],
];
