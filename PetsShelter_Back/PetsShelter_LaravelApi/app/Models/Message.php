<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'has_sender_read',
        'has_receiver_read',
        'conversation_id',
        'user_sender_id',
        'user_receiver_id',
    ];

   /* public function conversation(){
        return $this->belongsTo(Conversation::class);
    } */

}
