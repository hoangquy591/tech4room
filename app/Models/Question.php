<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Question extends Model
{

//    protected $dateFormat = 'U';

    protected $table = 'questions';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'content', 'author'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'id', 'content'
    ];

//    protected $casts = [
//        'created_at' => 'datetime:d-m-Y h:m',
//        'updated_at' => 'datetime:d-m-Y h:m',
//    ];

}
