<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BundleController;
use App\Http\Controllers\ConversationController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PaymentController;
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
    Route::post('edit-profile', [AuthController::class, 'editProfile']);
    Route::post('change-password', [AuthController::class, 'changePassword']);
    Route::post('reset-password', [AuthController::class,'resetPassword']);

    Route::post('add-pet', [PetController::class,'create']);
    Route::get('my-pets', [PetController::class, 'myPets']);
    Route::get('pets-to-adopt/{id}', [PetController::class, 'show']);
    Route::get('my-pets/edit/{id}', [PetController::class, 'edit']);
    Route::post('my-pets/edit/{id}', [PetController::class, 'update']);
    Route::post('my-pets/edit-photo/{id}', [PetController::class, 'updatePhoto']);
    Route::post('my-pets/delete/{id}', [PetController::class, 'destroy']);
    Route::get('saved-pets', [PetController::class, 'showSavedPets']);
    Route::get('check-saved-pet/{id}', [PetController::class, 'checkSavedPet']);
    Route::post('add-saved-pet/{id}', [PetController::class, 'addSavedPet']);
    Route::post('saved-pets/delete/{id}', [PetController::class, 'deleteSavedPet']);

    Route::get('sick-pets', [SickPetController::class, 'showSickPets']);

    Route::post('create-conversation', [ConversationController::class,'create']);
    Route::get('conversations', [ConversationController::class, 'getConversations']);
    Route::get('conversations/{id}', [ConversationController::class, 'getConversation']);

    Route::post('create-message', [MessageController::class,'create']);
    Route::get('messages/{id}', [MessageController::class, 'getMessages']);
    Route::get('messages-count', [MessageController::class, 'getUnreadMessagesCount']);
    Route::get('messages-count/{id}', [MessageController::class, 'getUnreadConversationMessagesCount']);

    Route::post('top-up-tokens', [AuthController::class, 'topUpTokens']);
    Route::post('transfer-tokens/{petId}', [AuthController::class, 'transferTokens']);
    Route::get('bundles', [BundleController::class, 'showBundles']);
    Route::get('bundles/{id}', [BundleController::class, 'show']);

    Route::post('payment-intent', [PaymentController::class, 'createPayIntent']);
    Route::post('store-payment', [PaymentController::class, 'storeStripePayment']);

    Route::middleware(['can:isAdmin'])->group(function () {
        Route::post('add-sick-pet', [SickPetController::class,'create']);
        Route::get('sick-pets/edit/{id}', [SickPetController::class, 'edit']);
        Route::post('sick-pets/edit/{id}', [SickPetController::class, 'update']);
        Route::post('sick-pets/edit-photo/{id}', [SickPetController::class, 'updatePhoto']);
        Route::post('sick-pets/delete/{id}', [SickPetController::class, 'destroy']);

        Route::get('users', [AuthController::class, 'showUsers']);
        Route::post('users/delete/{id}', [AuthController::class, 'deleteUser']);
    });


});
