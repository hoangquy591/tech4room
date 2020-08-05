<?php


namespace App\Repositories;


use Illuminate\Database\Eloquent\Model;

interface BaseRepositoryInterface
{
    /**
     * Get all
     * @param $recordPerPage
     * @return mixed
     */
    public function all($recordPerPage);

    /**
     * Store
     * @param Model $model
     * @return mixed
     */
    public function store(Model $model);

    /**
     * Get one
     * @param $id
     * @return mixed
     */
    public function get($id);

    /**
     * Update
     * @param $id
     * @param $attributes
     * @return mixed
     */
    public function update($id, array $attributes);

    /**
     * Destroy
     * @param $id
     * @return mixed
     */
    public function destroy($id);
}
