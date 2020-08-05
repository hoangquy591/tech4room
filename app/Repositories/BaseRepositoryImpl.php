<?php


namespace App\Repositories;


use Illuminate\Database\Eloquent\Model;

class BaseRepositoryImpl implements BaseRepositoryInterface
{

    /**
     * @Model need to use in Repository
     */
    private $model;

    /**
     * Inject @Model into BaseRepositoryImp by constructor
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * Get all
     * @param $recordPerPage
     * @return mixed
     */
    public function all($recordPerPage)
    {
        if ($recordPerPage != null) {
            return $this->model->paginate($recordPerPage);
        }
        return $this->model->paginate(15);
    }

    /**
     * Store
     * @param $attributes
     * @return mixed
     */
    public function store(Model $model)
    {
        return $model->save();
    }

    /**
     * Get one
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        return $this->model->findOrFail($id);
    }

    /**
     * Update
     * @param $id
     * @param $attributes
     * @return mixed
     */
    public function update($id, array $attributes)
    {
        return $this->model->findOrFail($id)->update($attributes);
    }

    /**
     * Destroy
     * @param $id
     * @return mixed
     */
    public function destroy($id)
    {
        return $this->model->findOrFail($id)->delete();
    }
}
