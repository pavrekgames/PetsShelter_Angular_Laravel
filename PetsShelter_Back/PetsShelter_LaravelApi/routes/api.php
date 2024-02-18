<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PetController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::get('newest-pets', [PetController::class, 'newestPets']);
Route::get('pets-to-adopt', [PetController::class, 'petsToAdopt']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::group([

    'middleware' => 'api'

], function ($router) {


    Route::post('logout', [AuthController::class, 'logout']);
    //Route::post('refresh', 'AuthController@refresh');
    Route::post('me', [AuthController::class,'me']);

    Route::post('add-pet', [PetController::class,'create']);

});
