<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Storage;
use App\Models\SickPet;
use Illuminate\Http\Request;
use App\Services\PetValidationService;

class SickPetController extends Controller
{
    public $petValidationService;

    public function __construct(PetValidationService $petValidationService)
    {
        $this->petValidationService = $petValidationService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function showSickPets()
    {
        $pets = SickPet::all();

        return response()->json($pets, Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validation = $this->petValidationService->validateAddSickPetForm($request);

        if ($validation) {
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        $photo = $request->file('photo')->store('pets');

        $baseUrl = url('/');
        $baseName = basename(base_path());
        $path = '';

        if($baseName == 'laravel'){
            $path = '/'.$baseName.'/storage/app/public/';
        }else{
            $path = '/storage/';
        }

        $pet = SickPet::Create([
            'name' => $request->input('name'),
            'species' => $request->input('species'),
            'disease' => $request->input('disease'),
            'current_tokens' => 0,
            'required_tokens' => $request->input('required_tokens'),
            'status' => 'Aktywne',
            'photo_path' => $baseUrl.$path.$photo,
        ]);

        return response()->json(['message' => 'Dodałeś chore zwierzę', 'userData'=> $pet], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SickPet  $sickPet
     * @return \Illuminate\Http\Response
     */
    public function show(SickPet $sickPet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SickPet  $sickPet
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $id = $request->id;
        $pet = SickPet::findOrFail($id);

        return response()->json($pet, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SickPet  $sickPet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validation = $this->petValidationService->validateEditSickPetForm($request);

        if ($validation) {
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        $id = $request->id;
        $pet = SickPet::where('id', $id)->update($request->only('name', 'species', 'disease', 'required_tokens'));

        return response()->json($pet, Response::HTTP_OK);
    }

    public function updatePhoto(Request $request)
    {
        $validation = $this->petValidationService->validatePetPhotoForm($request);

        if ($validation) {
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        $baseUrl = url('/');
        $baseName = basename(base_path());
        $path = '';

        if($baseName == 'laravel'){
            $path = '/'.$baseName.'/storage/app/public/';
        }else{
            $path = '/storage/';
        }

        $id = $request->id;
        $pet = SickPet::findOrFail($id);
        $oldPhotoPath = $pet->photo_path;
        $oldPhotoPath = trim(str_replace($baseUrl.$path, '', $oldPhotoPath));

        if(Storage::exists($oldPhotoPath)){
            Storage::delete($oldPhotoPath);
        }

        $baseUrl = url('/');
        $newPhoto = $request->file('photo')->store('pets');
        $newPhotoPath = $baseUrl.$path.$newPhoto;
        $pet->photo_path = $newPhotoPath;

        $pet->save();

        return response()->json($pet, Response::HTTP_OK);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SickPet  $sickPet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->id;
        $pet = SickPet::where('id', $id)->delete();

        return response()->json($pet, Response::HTTP_OK);
    }
}
