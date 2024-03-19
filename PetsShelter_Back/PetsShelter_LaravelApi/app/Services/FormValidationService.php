<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;


class FormValidationService
{

    public function validateRegisterForm(Request $request)
    {
        $data = $request->only('name', 'surname', 'email', 'password');

        $validator = Validator::make($data, [
            'name' => 'required|max:25',
            'surname' => 'required|max:25',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $validationResponse = $this->checkValidation($validator);

        return $validationResponse;
    }

    public function validateLoginForm(Request $request){

        $data = $request->only('email', 'password');

        $validator = Validator::make($data, [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $validationResponse = $this->checkValidation($validator);

        return $validationResponse;
    }

    private function checkValidation($validator)
    {
        if ($validator->fails()) {
            return $validator->errors();
        }
    }

}
