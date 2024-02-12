<?php

namespace App\Http\Controllers;

use Auth;
use Cookie;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request){

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
