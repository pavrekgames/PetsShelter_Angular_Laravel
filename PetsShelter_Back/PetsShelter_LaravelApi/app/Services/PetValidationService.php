<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PetValidationService
{

    public function validateAddPetForm(Request $request)
    {
        $data = $request->only('name', 'species', 'race', 'size', 'photo');

        $validator = Validator::make($data, [
            'name' => 'required',
            'species' => 'required|min:3',
            'race' => 'required|min:3',
            'size' => 'required|min:4',
            'photo' => 'required',
        ]);

        $validationResponse = $this->checkValidation($validator);

        return $validationResponse;
    }

    public function validateEditPetForm(Request $request)
    {
        $data = $request->only('name', 'species', 'race', 'size');

        $validator = Validator::make($data, [
            'name' => 'required',
            'species' => 'required|min:3',
            'race' => 'required|min:3',
            'size' => 'required|min:4'
        ]);

        $validationResponse = $this->checkValidation($validator);

        return $validationResponse;
    }

    public function validatePetPhotoForm(Request $request)
    {
        $data = $request->only('photo');

        $validator = Validator::make($data, [
            'photo' => 'required',
        ]);

        $validationResponse = $this->checkValidation($validator);

        return $validationResponse;
    }

    public function validateAddSickPetForm(Request $request)
    {
        $data = $request->only('name', 'species', 'disease', 'required_tokens', 'photo');

        $validator = Validator::make($data, [
            'name' => 'required',
            'species' => 'required|min:3',
            'disease' => 'required|min:3',
            'required_tokens' => 'required|integer|min:1',
            'photo' => 'required',
        ]);

        $validationResponse = $this->checkValidation($validator);

        return $validationResponse;
    }

    public function validateEditSickPetForm(Request $request)
    {
        $data = $request->only('name', 'species', 'disease', 'required_tokens');

        $validator = Validator::make($data, [
            'name' => 'required',
            'species' => 'required|min:3',
            'disease' => 'required|min:3',
            'required_tokens' => 'required|integer|min:1',
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