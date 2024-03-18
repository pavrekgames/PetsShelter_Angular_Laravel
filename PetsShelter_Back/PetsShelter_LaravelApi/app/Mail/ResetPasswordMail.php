<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    private $mailData;
    /**
     * Create a new message instance.
     *
     * @return void
     */

    public function __construct($mailData)
    {
        $this->mailData = $mailData;
    }

    public function build()
    {

        return $this
            ->from('petshelter@support.gamil.com', 'Paweł Śruta')
            ->subject("Resetowanie hasła - Pet Shelter")
            ->markdown('emails.ResetPasswordMail')
            ->with([
                'mailData' => $this->mailData,
            ]);
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Reset Password Mail',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            markdown: 'emails.ResetPasswordMail',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}
