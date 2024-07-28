<?php

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('products', 'ProductsController@index');
Route::get('products/{product}', 'ProductsController@show');
Route::post('products', 'ProductsController@store');
Route::put('products/{product}', 'ProductsController@update');
Route::delete('products/{product}', 'ProductsController@delete');

// GET /products/ - весь список
// GET /products/{id} - продукт по id
// POST /products: - создание нового продукта
// PUT /products/{id}: - обновление/изменение продукта по id
// DELETE /products/{id}: - удаление по id