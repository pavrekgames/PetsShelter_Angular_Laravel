<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ConversationController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\SickPetController;
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
    Route::put('edit-profile', [AuthController::class, 'editProfile']);
    Route::put('change-password', [AuthController::class, 'changePassword']);
    Route::put('top-up-tokens', [AuthController::class, 'topUpTokens']);
    Route::post('transfer-tokens/{petId}', [AuthController::class, 'transferTokens']);

    Route::post('add-pet', [PetController::class,'create']);
    Route::get('my-pets', [PetController::class, 'myPets']);
    Route::get('pets-to-adopt/{id}', [PetController::class, 'show']);
    Route::get('my-pets/edit/{id}', [PetController::class, 'edit']);
    Route::put('my-pets/edit/{id}', [PetController::class, 'update']);
    Route::post('my-pets/edit-photo/{id}', [PetController::class, 'updatePhoto']);
    Route::delete('my-pets/delete/{id}', [PetController::class, 'destroy']);
    Route::get('saved-pets', [PetController::class, 'showSavedPets']);
    Route::get('check-saved-pet/{id}', [PetController::class, 'checkSavedPet']);
    Route::post('add-saved-pet/{id}', [PetController::class, 'addSavedPet']);
    Route::delete('saved-pets/delete/{id}', [PetController::class, 'deleteSavedPet']);

    Route::get('sick-pets', [SickPetController::class, 'showSickPets']);

    Route::post('create-conversation', [ConversationController::class,'create']);

    Route::middleware(['can:isAdmin'])->group(function () {
        Route::post('add-sick-pet', [SickPetController::class,'create']);
        Route::get('sick-pets/edit/{id}', [SickPetController::class, 'edit']);
        Route::put('sick-pets/edit/{id}', [SickPetController::class, 'update']);
        Route::post('sick-pets/edit-photo/{id}', [SickPetController::class, 'updatePhoto']);
        Route::delete('sick-pets/delete/{id}', [SickPetController::class, 'destroy']);

        Route::get('users', [AuthController::class, 'showUsers']);
        Route::delete('users/delete/{id}', [AuthController::class, 'deleteUser']);
    });


});
