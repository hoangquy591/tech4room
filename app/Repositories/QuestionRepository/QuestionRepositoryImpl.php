<?php


namespace App\Repositories\QuestionRepository;


use App\Models\Question;
use App\Repositories\BaseRepositoryImpl;

class QuestionRepositoryImpl extends BaseRepositoryImpl implements QuestionRepositoryInterface
{
    protected $model;

    /**
     * UserRepositoryImp Constructor
     * @param Question model
     */
    public function __construct(Question $model)
    {
        parent::__construct($model);
    }
}
