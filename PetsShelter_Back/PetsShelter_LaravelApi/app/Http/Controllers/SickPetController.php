<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use App\Models\SickPet;
use Illuminate\Http\Request;

class SickPetController extends Controller
{
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
        $data = $request->only('name', 'species', 'disease', 'required_tokens', 'photo');

        $validator = Validator::make($data, [
            'name' => 'required',
            'species' => 'required|min:3',
            'disease' => 'required|min:3',
            'required_tokens' => 'required|integer|min:1',
            'photo' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $photo = $request->file('photo')->store('pets');

        $pet = SickPet::Create([
            'name' => $request->input('name'),
            'species' => $request->input('species'),
            'disease' => $request->input('disease'),
            'current_tokens' => 0,
            'required_tokens' => $request->input('required_tokens'),
            'status' => 'Aktywne',
            'photo_path' => "http://127.0.0.1:8000/storage/".$photo,
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
        $data = $request->only('name', 'species', 'disease', 'required_tokens');

        $validator = Validator::make($data, [
            'name' => 'required',
            'species' => 'required|min:3',
            'disease' => 'required|min:3',
            'required_tokens' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        $id = $request->id;
        $pet = SickPet::where('id', $id)->update($request->only('name', 'species', 'disease', 'required_tokens'));

        return response()->json($pet, Response::HTTP_OK);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SickPet  $sickPet
     * @return \Illuminate\Http\Response
     */
    public function destroy(SickPet $sickPet)
    {
        //
    }
}
