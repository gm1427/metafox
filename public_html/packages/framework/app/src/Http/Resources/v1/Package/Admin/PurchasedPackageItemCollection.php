<?php

namespace MetaFox\App\Http\Resources\v1\Package\Admin;

use Illuminate\Http\Resources\Json\ResourceCollection;

/**
 * Class PackageItemCollection.
 * @SuppressWarnings(PHPMD.UnusedFormalParameter)
 */
class PurchasedPackageItemCollection extends ResourceCollection
{
    public $collects = PurchasedPackageItem::class;
}
