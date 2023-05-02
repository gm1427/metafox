<?php

/* this is auto generated file */
return [
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Category\\Admin\\DataGrid',
        'type'       => 'data-grid',
        'name'       => 'group.category',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
        'title'      => '',
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\ExampleRule\\Admin\\DataGrid',
        'type'       => 'data-grid',
        'name'       => 'group.example_rule',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
        'title'      => '',
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\Group',
        'type'       => 'entity',
        'name'       => 'group',
        'is_active'  => true,
        'is_preload' => false,
        'title'      => 'Groups',
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\Answers',
        'type'       => 'entity',
        'name'       => 'group_answer',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\Block',
        'type'       => 'entity',
        'name'       => 'group_block',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\Category',
        'type'       => 'entity',
        'name'       => 'group_category',
        'is_active'  => true,
        'is_preload' => false,
        'title'      => 'Group Categories',
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\GroupChangePrivacy',
        'type'       => 'entity',
        'name'       => 'group_change_privacy',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\Invite',
        'type'       => 'entity',
        'name'       => 'group_invite',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\GroupInviteCode',
        'type'       => 'entity',
        'name'       => 'group_invite_code',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\Question',
        'type'       => 'entity',
        'name'       => 'group_question',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\QuestionField',
        'type'       => 'entity',
        'name'       => 'group_question_field',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\Request',
        'type'       => 'entity',
        'name'       => 'group_request',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\Rule',
        'type'       => 'entity',
        'name'       => 'group_rule',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\ExampleRule',
        'type'       => 'entity',
        'name'       => 'group_rule_example',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\Group',
        'type'       => 'entity-content',
        'name'       => 'group',
        'is_active'  => true,
        'is_preload' => false,
        'title'      => 'Groups',
    ],
    [
        'driver'     => 'MetaFox\\Group\\Models\\Group',
        'type'       => 'entity-user',
        'name'       => 'group',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\AboutForm',
        'type'       => 'form',
        'name'       => 'group.about',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\ExampleRule\\Admin\\StoreExampleRuleForm',
        'type'       => 'form',
        'name'       => 'group.example_rule.store',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\ExampleRule\\Admin\\UpdateExampleRuleForm',
        'type'       => 'form',
        'name'       => 'group.example_rule.update',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\AboutMobileForm',
        'type'       => 'form',
        'name'       => 'group.group.about',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Category\\Admin\\DestroyCategoryForm',
        'type'       => 'form',
        'name'       => 'group.group_category.destroy',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Category\\Admin\\StoreCategoryForm',
        'type'       => 'form',
        'name'       => 'group.group_category.store',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Category\\Admin\\UpdateCategoryForm',
        'type'       => 'form',
        'name'       => 'group.group_category.update',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\InfoMobileForm',
        'type'       => 'form',
        'name'       => 'group.group.info',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Member\\ReassignOwnerMobileForm',
        'type'       => 'form',
        'name'       => 'group.group_member.reassign_owner',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Member\\RemoveMemberMobileForm',
        'type'       => 'form',
        'name'       => 'group.group_member.remove_member',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Member\\RemoveMemberForm',
        'type'       => 'form',
        'name'       => 'group.group_member.remove_member',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\ModerationRightMobileForm',
        'type'       => 'form',
        'name'       => 'group.group.moderation_right',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Mute\\MuteInGroupForm',
        'type'       => 'form',
        'name'       => 'group.group_mute.mute_in_group',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Mute\\MuteInGroupMobileForm',
        'type'       => 'form',
        'name'       => 'group.group_mute.mute_in_group',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\PermissionMobileForm',
        'type'       => 'form',
        'name'       => 'group.group.permission',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\PrivacyMobileForm',
        'type'       => 'form',
        'name'       => 'group.group.privacy',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Question\\JoinQuestionForm',
        'type'       => 'form',
        'name'       => 'group.group_question.join',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Question\\JoinQuestionMobileForm',
        'type'       => 'form',
        'name'       => 'group.group_question.join',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Question\\StoreQuestionForm',
        'type'       => 'form',
        'name'       => 'group.group_question.store',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Question\\StoreQuestionMobileForm',
        'type'       => 'form',
        'name'       => 'group.group_question.store',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Question\\UpdateQuestionForm',
        'type'       => 'form',
        'name'       => 'group.group_question.update',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Question\\UpdateQuestionMobileForm',
        'type'       => 'form',
        'name'       => 'group.group_question.update',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Question\\GetAnswersForm',
        'type'       => 'form',
        'name'       => 'group.group_question.view_answers',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Rule\\StoreGroupRuleMobileForm',
        'type'       => 'form',
        'name'       => 'group.group_rule.store',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Rule\\StoreGroupRuleForm',
        'type'       => 'form',
        'name'       => 'group.group_rule.store_group',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Rule\\UpdateGroupRuleMobileForm',
        'type'       => 'form',
        'name'       => 'group.group_rule.update',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Rule\\UpdateGroupRuleForm',
        'type'       => 'form',
        'name'       => 'group.group_rule.update_group',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\CreateMobileForm',
        'type'       => 'form',
        'name'       => 'group.group.store',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\InfoForm',
        'type'       => 'form',
        'name'       => 'group.info',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Invite\\StoreInviteMobileForm',
        'type'       => 'form',
        'name'       => 'group.invite.store',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\ModerationRightForm',
        'type'       => 'form',
        'name'       => 'group.moderation_right',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\PermissionForm',
        'type'       => 'form',
        'name'       => 'group.permission',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\SearchGroupMobileForm',
        'type'       => 'form',
        'name'       => 'group.search',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => true,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\SearchGroupForm',
        'type'       => 'form',
        'name'       => 'group.search',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => true,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\SearchInGroupMobileForm',
        'type'       => 'form',
        'name'       => 'group.search_in',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => true,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\SearchInGroupForm',
        'type'       => 'form',
        'name'       => 'group.search_in',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => true,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\CreateForm',
        'type'       => 'form',
        'name'       => 'group.store',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Support\\Form\\Mobile\\MembershipQuestionField',
        'type'       => 'form-field',
        'name'       => 'membershipQuestion',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Support\\Form\\Html\\MembershipQuestionField',
        'type'       => 'form-field',
        'name'       => 'membershipQuestion',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Admin\\SiteSettingForm',
        'type'       => 'form-settings',
        'name'       => 'group',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
        'title'      => 'core::phrase.settings',
        'url'        => '/admincp/group/setting',
    ],
    [
        'driver'     => 'MetaFox\\Group\\Jobs\\ChangePrivacyGroupJob',
        'type'       => 'job',
        'name'       => 'MetaFox\\Group\\Jobs\\ChangePrivacyGroupJob',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Jobs\\DeleteCategoryJob',
        'type'       => 'job',
        'name'       => 'MetaFox\\Group\\Jobs\\DeleteCategoryJob',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Jobs\\UnmuteInGroupJob',
        'type'       => 'job',
        'name'       => 'MetaFox\\Group\\Jobs\\UnmuteInGroupJob',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Jobs\\UpdateStatusCodeInviteJob',
        'type'       => 'job',
        'name'       => 'MetaFox\\Group\\Jobs\\UpdateStatusCodeInviteJob',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Answers\\AnswersItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group_answer.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Block\\BlockItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group_block.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Category\\CategoryEmbedCollection',
        'type'       => 'json-collection',
        'name'       => 'group_category.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Category\\CategoryItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group_category.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\GroupEmbedCollection',
        'type'       => 'json-collection',
        'name'       => 'group.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\GroupInviteCode\\GroupInviteCodeItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group_invite_code.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Invite\\InviteItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group_invite.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\GroupItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Member\\MemberItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group_member.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\QuestionField\\QuestionFieldItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group_question_field.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Question\\QuestionItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group_question.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Request\\RequestItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group_request.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\ExampleRule\\ExampleRuleItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group_rule_example.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Rule\\RuleItemCollection',
        'type'       => 'json-collection',
        'name'       => 'group_rule.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\GroupSimpleCollection',
        'type'       => 'json-collection',
        'name'       => 'group.simple',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Answers\\AnswersItem',
        'type'       => 'json-resource',
        'name'       => 'group_answer.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Block\\BlockDetail',
        'type'       => 'json-resource',
        'name'       => 'group_block.detail',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Block\\BlockItem',
        'type'       => 'json-resource',
        'name'       => 'group_block.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Category\\CategoryDetail',
        'type'       => 'json-resource',
        'name'       => 'group_category.detail',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Category\\CategoryEmbed',
        'type'       => 'json-resource',
        'name'       => 'group_category.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Category\\CategoryItem',
        'type'       => 'json-resource',
        'name'       => 'group_category.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\GroupDetail',
        'type'       => 'json-resource',
        'name'       => 'group.detail',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\GroupEmbed',
        'type'       => 'json-resource',
        'name'       => 'group.embed',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\GroupInfo',
        'type'       => 'json-resource',
        'name'       => 'group.info',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\GroupInviteCode\\GroupInviteCodeDetail',
        'type'       => 'json-resource',
        'name'       => 'group_invite_code.detail',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\GroupInviteCode\\GroupInviteCodeItem',
        'type'       => 'json-resource',
        'name'       => 'group_invite_code.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Invite\\InviteItem',
        'type'       => 'json-resource',
        'name'       => 'group_invite.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\GroupItem',
        'type'       => 'json-resource',
        'name'       => 'group.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Member\\MemberItem',
        'type'       => 'json-resource',
        'name'       => 'group_member.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\GroupNoPermission',
        'type'       => 'json-resource',
        'name'       => 'group.no_permission',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\GroupPreview',
        'type'       => 'json-resource',
        'name'       => 'group.preview',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\QuestionField\\QuestionFieldItem',
        'type'       => 'json-resource',
        'name'       => 'group_question_field.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Question\\QuestionItem',
        'type'       => 'json-resource',
        'name'       => 'group_question.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Request\\RequestItem',
        'type'       => 'json-resource',
        'name'       => 'group_request.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\ExampleRule\\ExampleRuleItem',
        'type'       => 'json-resource',
        'name'       => 'group_rule_example.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Rule\\RuleItem',
        'type'       => 'json-resource',
        'name'       => 'group_rule.item',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\GroupSimple',
        'type'       => 'json-resource',
        'name'       => 'group.simple',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Notifications\\AcceptRequestNotification',
        'type'       => 'notification',
        'name'       => 'accept_request_member',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Notifications\\AddGroupAdmin',
        'type'       => 'notification',
        'name'       => 'add_group_admin',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Notifications\\AddGroupModerator',
        'type'       => 'notification',
        'name'       => 'add_group_moderator',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Notifications\\ApproveNewPostNotification',
        'type'       => 'notification',
        'name'       => 'approved_new_post',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Notifications\\GroupInvite',
        'type'       => 'notification',
        'name'       => 'group_invite',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Notifications\\PendingRequestNotification',
        'type'       => 'notification',
        'name'       => 'group_pending_request',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Notifications\\PendingPrivacyNotification',
        'type'       => 'notification',
        'name'       => 'pending_privacy',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Notifications\\SuccessPrivacyNotification',
        'type'       => 'notification',
        'name'       => 'success_change_privacy',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\PackageSetting',
        'type'       => 'package-setting',
        'name'       => 'group',
        'version'    => 'v1',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Policies\\CategoryPolicy',
        'type'       => 'policy-resource',
        'name'       => 'MetaFox\\Group\\Models\\Category',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Policies\\ExampleRulePolicy',
        'type'       => 'policy-resource',
        'name'       => 'MetaFox\\Group\\Models\\ExampleRule',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Policies\\GroupPolicy',
        'type'       => 'policy-resource',
        'name'       => 'MetaFox\\Group\\Models\\Group',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Policies\\MemberPolicy',
        'type'       => 'policy-resource',
        'name'       => 'MetaFox\\Group\\Models\\Member',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Policies\\RequestPolicy',
        'type'       => 'policy-resource',
        'name'       => 'MetaFox\\Group\\Models\\Request',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'group',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Announcement\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'group_announcement',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Block\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'group_block',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Invite\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'group_invite',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\GroupInviteCode\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'group_invite_code',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Member\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'group_member',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Mute\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'group_mute',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Question\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'group_question',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Request\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'group_request',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Rule\\MobileSetting',
        'type'       => 'resource-mobile',
        'name'       => 'group_rule',
        'version'    => 'v1',
        'resolution' => 'mobile',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\ExampleRule\\Admin\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'example_rule',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Group\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Announcement\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group_announcement',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Block\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group_block',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Category\\Admin\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group_category',
        'version'    => 'v1',
        'resolution' => 'admin',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Category\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group_category',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Invite\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group_invite',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\GroupInviteCode\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group_invite_code',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Member\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group_member',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Mute\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group_mute',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Question\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group_question',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Request\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group_request',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
    [
        'driver'     => 'MetaFox\\Group\\Http\\Resources\\v1\\Rule\\WebSetting',
        'type'       => 'resource-web',
        'name'       => 'group_rule',
        'version'    => 'v1',
        'resolution' => 'web',
        'is_active'  => true,
        'is_preload' => false,
    ],
];