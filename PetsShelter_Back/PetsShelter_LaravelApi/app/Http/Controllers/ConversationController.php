<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\User;
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
            return response()->json($existingConversation, Response::HTTP_OK);
        }

        $conversation = Conversation::Create([
            'user_sender_id' => $authUserId,
            'user_receiver_id' => $petUserId,
            'pet_id' => $petId
        ]);

        return response()->json($conversation, Response::HTTP_OK);

    }

    public function getConversations(Request $request)
    {

        $authUserId = auth()->user()->id;

        $conversations = Conversation::where('user_receiver_id', $authUserId)->orWhere('user_sender_id', $authUserId)->get();

        $conversations = $conversations->map(function ($conversation) use ($authUserId) {
            $data = [];
            $pet = $conversation->pet;

            if ($conversation->user_receiver_id == $authUserId) {

                //$user = User::find($conversation->user_sender_id);
                $user = $conversation->sender;

                $data = [
                    'id' => $conversation->id,
                    'user_name' => $user->name,
                    'user_surname' => $user->surname,
                    'pet_name' => $pet->name,
                    'pet_photo' => $pet->photo_path,
                ];
            }

            if ($conversation->user_sender_id == $authUserId) {

                //$user = User::find($conversation->user_receiver_id);
                $user = $conversation->receiver;

                $data = [
                    'id' => $conversation->id,
                    'user_name' => $user->name,
                    'user_surname' => $user->surname,
                    'pet_name' => $pet->name,
                    'pet_photo' => $pet->photo_path,
                ];
            }

            return $data;
        });

        return response()->json($conversations, Response::HTTP_OK);

    }

}
