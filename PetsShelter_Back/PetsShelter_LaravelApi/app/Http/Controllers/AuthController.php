<?php

namespace App\Http\Controllers;

use App\Mail\ResetPasswordMail;
use App\Services\FormValidationService;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\SickPet;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Services\AuthService;

class AuthController extends Controller
{

    public $authService;
    public $formValidationService;

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct(AuthService $authService, FormValidationService $formValidationService)
    {
        //$this->middleware('auth:api', ['except' => ['login']]);
        $this->authService = $authService;
        $this->formValidationService = $formValidationService;

    }

    public function register(Request $request)
    {

        $validation = $this->formValidationService->validateRegisterForm($request);

        if($validation){
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        $user = User::Create([
            'name' => $request->input('name'),
            'surname' => $request->input('surname'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'role' => 'user',
            'tokens_count' => 0
        ]);

        return response()->json(['message' => 'Zostałeś zarejestrowany', 'userData' => $user], Response::HTTP_OK);

    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');;

        $validation = $this->formValidationService->validateLoginForm($request);

        if($validation){
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function showUsers()
    {
        $users = User::where('role', 'user')->get();

        return response()->json($users, Response::HTTP_OK);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Edit profile of the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function editProfile(Request $request)
    {
        $validation = $this->formValidationService->validateEditProfileForm($request);

        if($validation){
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        $user = auth()->user();
        $id = $user->id;
        $editedUser = User::where('id', $id)->update($request->only('name', 'surname'));

        return response()->json($editedUser, Response::HTTP_OK);
    }

    /**
     * Change password of the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function changePassword(Request $request)
    {
        $validation = $this->formValidationService->validateChangePasswordForm($request);

        if($validation){
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        $user = auth()->user();

        $credentials = array();
        $credentials["email"] = $user->email;
        $credentials["password"] = $request->password;

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $request['password'] = Hash::make($request['newPassword']);

        $id = $user->id;
        $editedUser = User::where('id', $id)->update($request->only('password'));

        return response()->json($editedUser, Response::HTTP_OK);
    }

    /**
     * Reset password based on name and e-mail.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function resetPassword(Request $request)
    {
        $validation = $this->formValidationService->validateResetPasswordForm($request);

        if($validation){
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        $user = User::where('name', $request->name)
            ->where('email', $request->email)
            ->first();

        if (!$user)
            return response()->json(['error' => 'Nie ma takiego użytkownika'], Response::HTTP_BAD_REQUEST);

        $newPassword = '696969';
        $resetPassword = Hash::make($newPassword);

        $user->password = $resetPassword;
        $user->save();

        $mailData = [
            'reset_password' => $newPassword,
            'name' => $user->name
        ];

        $email = new ResetPasswordMail($mailData);

        Mail::to($user->email)->send($email->build());

        return response()->json(['message' => 'Wysłano e-mail'], Response::HTTP_OK);

    }

    public function deleteUser(Request $request)
    {
        $id = $request->id;
        $user = User::where('id', $id)->delete();

        return response()->json($user, Response::HTTP_OK);
    }

    /**
     * Top up tokens of the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function topUpTokens(Request $request)
    {
        $user = auth()->user();
        $id = $user->id;
        $updatedUser = User::where('id', $id)->update($request->only('tokens_count'));

        return response()->json($updatedUser, Response::HTTP_OK);
    }

    /**
     * Transfer tokens of the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function transferTokens(Request $request)
    {
        $tokens = (int) $request->tokens_count;
        $pet = SickPet::findOrFail($request->petId);
        $user = auth()->user();

        if ($pet->status == 'Zakończone') {
            return response()->json(['error' => 'Status akcji zakończony'], Response::HTTP_BAD_REQUEST);
        }

        DB::transaction(function () use ($tokens, $user, $pet) {
            $user->decrement('tokens_count', $tokens);
            $pet->increment('current_tokens', $tokens);

            if ($pet->current_tokens >= $pet->required_tokens) {
                $pet->update(['status' => 'Zakończone']);
            }
        });

        return response()->json(['message' => 'Transakcja wykonana'], Response::HTTP_OK);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Zostałes wylogowany']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

}
