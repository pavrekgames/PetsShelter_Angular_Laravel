<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Log;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\File;

class PetController extends Controller
{
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
        $data = $request->only('name', 'species', 'race', 'size', 'photo');

        $validator = Validator::make($data, [
            'name' => 'required',
            'species' => 'required|min:3',
            'race' => 'required|min:3',
            'size' => 'required|min:4',
            'photo' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $user = auth()->user();
        $photo = $request->file('photo')->store('pets');

        //dd(json_encode($file));
        //dd($request->all());

        //$photoPath = $request->file('photoPath');
        //dd($photoPath);

        $pet = Pet::Create([
            'name' => $request->input('name'),
            'species' => $request->input('species'),
            'race' => $request->input('race'),
            'size' => $request->input('size'),
            'description' => $request->input('description'),
            'photo_path' => "http://127.0.0.1:8000/storage/".$photo,
            'id_user' => $user->id,
        ]);

        return response()->json(['message' => 'Dodałeś zwierzę do adopcji', 'userData'=> $pet], Response::HTTP_OK);
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
    public function update(Request $request, Pet $pet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pet  $pet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pet $pet)
    {
        //
    }

    public function newestPets(){

        $pets = Pet::latest()->take(3)->get();

        return response()->json($pets, Response::HTTP_OK);
    }

    public function petsToAdopt(){

        $pets = Pet::all();

        return response()->json($pets, Response::HTTP_OK);
    }

    public function myPets(){

        $user = auth()->user();
        $pets = Pet::where('id_user', $user->id)->get();

        return response()->json($pets, Response::HTTP_OK);
    }



}
