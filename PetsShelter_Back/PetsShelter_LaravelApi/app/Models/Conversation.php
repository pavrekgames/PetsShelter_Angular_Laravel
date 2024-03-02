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

    public function pet(): HasOne{
        return $this->hasOne(Pet::class, 'user_id');
    }

    public function users(): HasMany{
        return $this->hasMany(User::class, 'user_id');
    }

}
