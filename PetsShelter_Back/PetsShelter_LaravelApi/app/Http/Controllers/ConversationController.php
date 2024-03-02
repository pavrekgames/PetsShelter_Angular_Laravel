<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ConversationController extends Controller
{

    public function create(Request $request)
    {

        $authUserId = auth()->user()->id;
        $petUserId = $request->user_id;
        $petId = $request->id;

        $existingConversation = Conversation::where(function ($query) use ($authUserId, $petUserId, $petId) {
            $query->where("user_sender_id", $authUserId)
                ->where("user_receiver_id", $petUserId)
                ->where("pet_id", $petId);
        })->orWhere(function ($query) use ($authUserId, $petUserId, $petId) {
            $query->where("user_sender_id", $petUserId)
                ->where("user_receiver_id", $authUserId)
                ->where("pet_id", $petId);
        })->first();

        if ($existingConversation) {
            return response()->json(['message' => 'Konwersacja istnieje', 'conversationData'=> $existingConversation], Response::HTTP_OK);
        }

        $conversation = Conversation::Create([
            'user_sender_id' => $authUserId,
            'user_receiver_id' => $petUserId,
            'pet_id' => $petId
        ]);

        return response()->json($conversation, Response::HTTP_OK);

    }



}
