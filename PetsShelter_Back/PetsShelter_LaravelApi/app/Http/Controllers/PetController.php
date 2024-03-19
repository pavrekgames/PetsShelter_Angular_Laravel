<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use App\Services\PetValidationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response;

class PetController extends Controller
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
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $validation = $this->petValidationService->validateAddPetForm($request);

        if ($validation) {
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        $user = auth()->user();
        $photo = $request->file('photo')->store('pets');

        $pet = Pet::Create([
            'name' => $request->input('name'),
            'species' => $request->input('species'),
            'race' => $request->input('race'),
            'size' => $request->input('size'),
            'description' => $request->input('description'),
            'photo_path' => "http://127.0.0.1:8000/storage/" . $photo,
            'user_id' => $user->id,
        ]);

        return response()->json(['message' => 'Dodałeś zwierzę do adopcji', 'userData' => $pet], Response::HTTP_OK);
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
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $id = $request->id;
        $pet = Pet::findOrFail($id);

        return response()->json($pet, Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $id = $request->id;
        $pet = Pet::findOrFail($id);

        return response()->json($pet, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validation = $this->petValidationService->validateEditPetForm($request);

        if ($validation) {
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        $id = $request->id;
        $pet = Pet::where('id', $id)->update($request->only('name', 'species', 'race', 'size', 'description'));

        return response()->json($pet, Response::HTTP_OK);
    }

    public function updatePhoto(Request $request)
    {
        $validation = $this->petValidationService->validatePetPhotoForm($request);

        if ($validation) {
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        $id = $request->id;
        $pet = Pet::findOrFail($id);
        $oldPhotoPath = $pet->photo_path;
        $oldPhotoPath = trim(str_replace('http://127.0.0.1:8000/storage/', '', $oldPhotoPath));

        if (Storage::exists($oldPhotoPath)) {
            Storage::delete($oldPhotoPath);
        }

        $newPhoto = $request->file('photo')->store('pets');
        $newPhotoPath = "http://127.0.0.1:8000/storage/" . $newPhoto;
        $pet->photo_path = $newPhotoPath;

        $pet->save();

        return response()->json($pet, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->id;
        $pet = Pet::where('id', $id)->delete();

        return response()->json($pet, Response::HTTP_OK);
    }

    public function newestPets()
    {
        $pets = Pet::latest()->take(3)->get();

        return response()->json($pets, Response::HTTP_OK);
    }

    public function petsToAdopt()
    {
        $pets = Pet::all();

        return response()->json($pets, Response::HTTP_OK);
    }

    public function myPets()
    {
        $user = auth()->user();
        $pets = $user->pets;

        return response()->json($pets, Response::HTTP_OK);
    }

    public function showSavedPets()
    {
        $user = auth()->user();
        $savedPets = $user->savedPets;

        return response()->json($savedPets, Response::HTTP_OK);
    }

    public function checkSavedPet(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;
        $petId = $request->id;

        $pet = DB::table('saved_pets')->select('pet_id')
            ->where('pet_id', $petId, )
            ->where('user_id', $userId, )
            ->first();

        return response()->json($pet, Response::HTTP_OK);
    }

    public function addSavedPet(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;
        $petId = $request->id;

        $pet = DB::table('saved_pets')->insert(array('user_id' => $userId, 'pet_id' => $petId));

        return response()->json($pet, Response::HTTP_OK);
    }

    public function deleteSavedPet(Request $request)
    {
        $user = auth()->user();
        $userId = $user->id;
        $petId = $request->id;

        $pet = DB::table('saved_pets')
            ->where('user_id', $userId)
            ->where('pet_id', $petId)
            ->delete();

        return response()->json($pet, Response::HTTP_OK);
    }



}
