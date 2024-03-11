<?php

namespace App\Http\Controllers;

use App\Models\Bundle;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BundleController extends Controller
{


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\Models\Bundle  $bundle
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $id = $request->id;
        $bundle = Bundle::findOrFail($id);

        return response()->json($bundle, Response::HTTP_OK);
    }

    public function showBundles(){

        $bundles = Bundle::all();

        return response()->json($bundles, Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bundle  $bundle
     * @return \Illuminate\Http\Response
     */
    public function edit(Bundle $bundle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bundle  $bundle
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bundle $bundle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bundle  $bundle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bundle $bundle)
    {
        //
    }
}
