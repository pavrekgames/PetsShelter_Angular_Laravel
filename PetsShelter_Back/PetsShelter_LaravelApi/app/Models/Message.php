<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'has_read',
        'conversation_id',
        'updated_at',
        'user_sender_id',
        'user_receiver_id',
    ];

    public function conversation(){
        return $this->belongsTo(Conversation::class);
    }

    public function userSender(): HasOne{
        return $this->hasone(User::class, 'id', 'user_sender_id');
    }

    public function userReceiver(): HasOne{
        return $this->hasone(User::class, 'id', 'user_receiver_id');
    }

}
