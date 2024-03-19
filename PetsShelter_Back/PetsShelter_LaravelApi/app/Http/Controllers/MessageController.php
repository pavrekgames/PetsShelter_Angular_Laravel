<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Symfony\Component\HttpFoundation\Response;
use App\Services\AuthValidationService;


class MessageController extends Controller
{
    public $formValidationService;

    public function __construct(AuthValidationService $formValidationService)
    {
        $this->formValidationService = $formValidationService;
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
        $validation = $this->formValidationService->validateSendMessage($request);

        if ($validation) {
            return response()->json(['error' => $validation], Response::HTTP_BAD_REQUEST);
        }

        $user = auth()->user();
        $authUserId = $user->id;
        $conversationId = $request->conversation_id;
        $conversation = Conversation::where('id', $conversationId)->first();

        if ($conversation->user_sender_id == $authUserId) {
            $message = Message::Create([
                'content' => $request->input('content'),
                'has_read' => '0',
                'conversation_id' => $conversationId,
                'user_sender_id' => $conversation->user_sender_id,
                'user_receiver_id' => $conversation->user_receiver_id,
            ]);
        }

        if ($conversation->user_receiver_id == $authUserId) {
            $message = Message::Create([
                'content' => $request->input('content'),
                'has_read' => '0',
                'conversation_id' => $conversationId,
                'user_sender_id' => $conversation->user_receiver_id,
                'user_receiver_id' => $conversation->user_sender_id,
            ]);
        }

        $conversation->updated_at = Carbon::now();
        $conversation->save();

        return response()->json(['message' => 'Wysłałeś wiadomość', 'messageData' => $message], Response::HTTP_OK);
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
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function getMessages(Request $request)
    {
        $user = auth()->user();
        $authUserId = $user->id;
        $conversationId = $request->id;
        $conversation = Conversation::where('id', $conversationId)->first();

        $messages = $conversation->messages()->orderBy('created_at', 'desc')->get();

        $messages = $messages->map(function ($message) use ($authUserId) {
            $data = [];

            if ($message->user_receiver_id == $authUserId && $message->has_read == '0') {
                $message->update(['has_read' => '1']);
            }

            $data = [
                'content' => $message->content,
                'user_name' => $message->userSender->name,
                'user_surname' => $message->userSender->surname,
                'date' => $message->created_at->format('Y-m-d H:i'),
                'sender_id' => $message->user_sender_id,
            ];

            return $data;
        });

        return response()->json($messages, Response::HTTP_OK);
    }

    public function getUnreadMessagesCount()
    {
        $user = auth()->user();
        $authUserId = $user->id;

        $messagesCount = Message::where('user_receiver_id', $authUserId)
            ->where('has_read', '0')->count();

        return response()->json(['messagesCount' => $messagesCount], Response::HTTP_OK);
    }

    public function getUnreadConversationMessagesCount(Request $request)
    {
        $conversationId = $request->id;

        $user = auth()->user();
        $authUserId = $user->id;

        $messagesCount = Message::where('conversation_id', $conversationId)
            ->where('user_receiver_id', $authUserId)
            ->where('has_read', '0')->count();

        return response()->json(['messagesCount' => $messagesCount], Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}
