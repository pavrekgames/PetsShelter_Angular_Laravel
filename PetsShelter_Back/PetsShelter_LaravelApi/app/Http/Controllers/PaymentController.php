<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Mockery\CountValidator\Exception;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class PaymentController extends Controller
{

    public function createPayIntent(Request $request)
    {

        try {
            $itemName = $request->name;
            $itemPrice = $request->price;
            $itemCurrency = $request->currency;

            \Stripe\Stripe::setApiKey(config('app.stripekey'));

            $intent = \Stripe\PaymentIntent::create([
                'amount' => $itemPrice,
                'currency' => $itemCurrency,
                'description' => $itemName
            ]);

            $user = auth()->user();
            $payment = Payment::Create([
                'status' => 'In progress',
                'user_id' => $user->id,
            ]);

            return response(['intent' => $intent]);
        } catch (Exception $e) {
            return response()->json([
                'errors' => $e->getMessage()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

    }

    public function storeStripePayment(Request $request)
    {

        try {
            $user = auth()->user();
            $userId = $user->id;
            $bundleId = $request->id;

            $payment = DB::table('payments_bundles')->insert(array('user_id' => $userId, 'bundle_id' => $bundleId));

            return response(['payment' => $payment]);

        } catch (Exception $e) {
            return response()->json([
                'errors' => $e->getMessage()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

    }


}