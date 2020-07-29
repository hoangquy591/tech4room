<?php


namespace App\Repositories\UserRepository;


use App\Models\User;
use App\Repositories\BaseRepositoryImpl;
use App\Repositories\UserRepositoryInterface;

class UserRepositoryImpl extends BaseRepositoryImpl implements UserRepositoryInterface
{
    /**
     * @Model UserResource
     */
    protected $model;

    /**
     * UserRepositoryImp Constructor
     * @param User model
     */
    public function __construct(User $model)
    {
        parent::__construct($model);
    }
}
