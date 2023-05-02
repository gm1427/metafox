<?php

namespace MetaFox\Group\Http\Requests\v1\Announcement;

use Illuminate\Foundation\Http\FormRequest;

/**
 * --------------------------------------------------------------------------
 *  Http request for api version v1
 * --------------------------------------------------------------------------.
 *
 * This class is used by automatic dependency injection:
 *
 * @link \MetaFox\Group\Http\Controllers\Api\v1\AnnouncementController::hide
 * stub: /packages/requests/api_action_request.stub
 */

/**
 * Class HiddenRequest.
 */
class HiddenRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'group_id' => ['required', 'numeric', 'exists:groups,id'],
            'ann_id'   => ['required', 'numeric', 'exists:group_announcements,id'],
        ];
    }
}