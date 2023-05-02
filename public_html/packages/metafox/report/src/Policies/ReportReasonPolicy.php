<?php

namespace MetaFox\Report\Policies;

use MetaFox\Platform\Contracts\User as User;
use MetaFox\Platform\Traits\Policy\HasPolicyTrait;
use MetaFox\Report\Models\ReportReason as Resource;

class ReportReasonPolicy
{
    use HasPolicyTrait;

    protected string $type = Resource::ENTITY_TYPE;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     *
     * @return bool
     */
    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('report_reason.view');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     *
     * @return bool
     */
    public function view(User $user): bool
    {
        return $user->hasPermissionTo('report_reason.view');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     *
     * @return bool
     */
    public function create(User $user): bool
    {
        return $user->hasPermissionTo('report_reason.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     *
     * @return bool
     */
    public function update(User $user): bool
    {
        return $user->hasPermissionTo('report_reason.update');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     *
     * @return bool
     */
    public function delete(User $user): bool
    {
        return $user->hasPermissionTo('report_reason.delete');
    }
}