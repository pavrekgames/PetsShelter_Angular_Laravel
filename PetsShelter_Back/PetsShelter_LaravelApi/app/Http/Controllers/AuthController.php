<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request){
        $user = User::Create([
            'name' => $request->input('name'),
            'surname' => $request->input('surname'),
            'email' => $request->input('email'),
            'password' => hash::make($request->input('password')),
            'role' => $request->input('role'),
            'tokens_count' => $request->input('tokensCount')
        ]);
    }
}
