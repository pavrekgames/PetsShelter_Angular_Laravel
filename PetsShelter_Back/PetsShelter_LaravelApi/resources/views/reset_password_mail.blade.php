@component('mail::message')

<h2>Witaj, {{$name}}</h2>
<p>Otrzymałeś ten e-mail ponieważ nie pamiętałeś swojego hasła</p>

<p>Twoje nowe hasło: <b>{{$reset_password}}</b></p>

Zaloguj się ponownie<br>

Podrawiam,<br>
{{ config('app.name') }}<br>
CEO - Paweł Śruta.

@endcomponent
