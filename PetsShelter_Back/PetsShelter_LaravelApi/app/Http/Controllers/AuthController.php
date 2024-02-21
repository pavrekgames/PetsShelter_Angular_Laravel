<?php

namespace App\Http\Controllers;

use Auth;
use Cookie;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth:api', ['except' => ['login']]);
    }

    public function register(Request $request)
    {

        $data = $request->only('name', 'surname', 'email', 'password');

        $validator = Validator::make($data, [
            'name' => 'required|max:25',
            'surname' => 'required|max:25',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $user = User::Create([
            'name' => $request->input('name'),
            'surname' => $request->input('surname'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'role' => 'user',
            'tokens_count' => 0
        ]);

        return response()->json(['message' => 'Zostałeś zarejestrowany', 'userData'=> $user], Response::HTTP_OK);

    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        /*if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        } */

        if (!$token = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->respondWithToken($token);
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

        $data = $request->only('name', 'surname');

        $validator = Validator::make($data, [
            'name' => 'required|max:25',
            'surname' => 'required|max:25',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
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

        $data = $request->only('password', 'newPassword');

        $validator = Validator::make($data, [
            'password' => 'required',
            'newPassword' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
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
