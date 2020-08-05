<?php

namespace App\Providers;

use App\Repositories\BaseRepositoryImpl;
use App\Repositories\BaseRepositoryInterface;
use App\Repositories\QuestionRepository\QuestionRepositoryImpl;
use App\Repositories\QuestionRepository\QuestionRepositoryInterface;
use App\Repositories\UserRepository\UserRepositoryImpl;
use App\Repositories\UserRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(BaseRepositoryInterface::class, BaseRepositoryImpl::class);
        $this->app->bind(UserRepositoryInterface::class, UserRepositoryImpl::class);
        $this->app->bind(QuestionRepositoryInterface::class, QuestionRepositoryImpl::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
