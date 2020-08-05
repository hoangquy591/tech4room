<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');

    Route::group([
        'middleware' => 'auth:api'
    ], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

Route::group([
    'prefix' => 'question',
], function () {
//    Route::get('all', 'QuestionController@allQuestion');
    Route::get('all', 'QuestionController@all');

    Route::group([
        'middleware' => 'auth:api'
    ], function () {
        Route::post('create', 'QuestionController@store');
    });
});
