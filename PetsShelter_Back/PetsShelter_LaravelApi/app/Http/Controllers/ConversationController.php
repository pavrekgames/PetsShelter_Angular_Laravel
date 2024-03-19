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

        $conversations = Conversation::where('user_receiver_id', $authUserId)->orWhere('user_sender_id', $authUserId)->orderBy('updated_at', 'desc')->get();

        $conversations = $conversations->map(function ($conversation) use ($authUserId) {
            $data = [];
            $pet = $conversation->pet;

            if ($conversation->user_receiver_id == $authUserId) {

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

    public function getConversation(Request $request)
    {
        $authUserId = auth()->user()->id;
        $conversationId = $request->id;

        $currentConversation = Conversation::where('id', $conversationId)->first();
        $pet = $currentConversation->pet;

        if ($currentConversation->user_receiver_id == $authUserId) {

            $user = $currentConversation->sender;

            $conversation = [
                'id' => $currentConversation->id,
                'user_name' => $user->name,
                'user_surname' => $user->surname,
                'pet_name' => $pet->name,
                'pet_photo' => $pet->photo_path,
            ];
        }

        if ($currentConversation->user_sender_id == $authUserId) {

            $user = $currentConversation->receiver;

            $conversation = [
                'id' => $currentConversation->id,
                'user_name' => $user->name,
                'user_surname' => $user->surname,
                'pet_name' => $pet->name,
                'pet_photo' => $pet->photo_path,
            ];
        }

        return response()->json($conversation, Response::HTTP_OK);
    }

}
