@component('mail::message')
<h2>Witaj,</h2>
<p>The email is a sample email for Laravel Tutorial: How to Send an Email using Laravel 8 from @component('mail::button', ['url' => $body['url_a']])
Bacancy Technology
@endcomponent</p>

<p>Visit @component('mail::button', ['url' => $body['url_b']])
Laravel Tutorials
@endcomponent and learn more about the Laravel framework.</p>


Happy coding!<br>

Podrawiam,<br>
{{ config('app.name') }}<br>
CEO - Paweł Śruta.
@endcomponent
