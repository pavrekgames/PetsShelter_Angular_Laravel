<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Conversation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_sender_id',
        'user_receiver_id',
        'pet_id'
    ];

    public function pet(): HasOne
    {
        return $this->hasOne(Pet::class, 'id', 'pet_id');
    }

    public function sender(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_sender_id');
    }

    public function receiver(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_receiver_id');
    }

    public function messages(): HasMany
    {
        return $this->hasMany(Message::class, 'conversation_id');
    }

    public function getReceiver()
    {

        $authUserId = auth()->user()->id;

        if ($this->user_sender_id == $authUserId) {
            return User::firstWhere('id', $this->user_receiver_id);
        } else {
            return User::firstWhere('id', $this->user_sender_id);
        }

    }

}
