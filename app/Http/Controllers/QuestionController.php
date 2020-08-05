<?php


namespace App\Http\Controllers;


use App\Models\Question;
use App\Repositories\QuestionRepository\QuestionRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class QuestionController extends Controller
{
    private $questionRepository;

    /**
     * QuestionController constructor.
     * @param $questionRepository
     */
    public function __construct(QuestionRepositoryInterface $questionRepository)
    {
        $this->questionRepository = $questionRepository;
    }

    /**
     * Get all question
     * @return mixed
     */
    public function all(Request $request) {
        return response()->json([
            $this->questionRepository->all($request->record)
        ], Response::HTTP_OK);
    }

    public function store(Request $request) {

        $request->validate([
            'title' => 'required',
            'body' => 'required',
        ]);

        $question = new Question([
            'title' => $request->title,
            'content' => $request->body,
            'author' => $request->author,
        ]);

        $this->questionRepository->store($question);

        return response()->json([
            'message' => 'Successfully created question!'
        ], Response::HTTP_OK);
    }

}
