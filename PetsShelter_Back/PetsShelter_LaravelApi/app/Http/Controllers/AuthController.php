<?php

namespace App\Http\Controllers;

use Auth;
use Cookie;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request){

        $data = $request->only('name', 'surname', 'email', 'password');

        $validator = Validator::make($data, [
            'name'=> 'required|max:25',
            'surname' => 'required|max:25',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        if( $validator->fails() ){
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

       return $user = User::Create([
            'name' => $request->input('name'),
            'surname' => $request->input('surname'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'role' => 'user',
            'tokens_count' => 0
        ]);
    }

    public function login(Request $request){

        $credentials = $request->only('email', 'password');

        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if( $validator->fails() ){
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }



        if(!Auth::attempt($request->only('email','password'))){
            return response([
                'message' => 'Błędny e-mail lub hasło'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();

        $token = $user->createToken('loginToken')->plainTextToken;

        $cookie = cookie('loginToken', $token, 60 * 24);

        return response([
            'message'=> 'Zostałeś zalogowany'
        ])->withCookie($cookie);
    }

    public function user(){
        return Auth::user();
    }

    public function logout(){
        $cookie = Cookie::forget('loginToken');

        //$request->user->remember_token.delete();

        return response([
            'message'=> 'Zostałeś wylogowany'
        ])->withCookie($cookie);
    }

}
