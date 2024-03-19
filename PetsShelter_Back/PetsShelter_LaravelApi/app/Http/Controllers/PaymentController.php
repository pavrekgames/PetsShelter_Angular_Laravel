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

            $user = auth()->user();

            \Stripe\Stripe::setApiKey(config('app.stripekey'));

            $intent = \Stripe\PaymentIntent::create([
                'amount' => round($itemPrice * 100),
                'currency' => $itemCurrency,
                'description' => $itemName,
            ]);

            $payment = Payment::Create([
                'status' => 'In progress',
                'intent_id' => $intent->id,
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
            $intentId = $request->intent_id;
            $bundleId = $request->id;
            $tokens_count = $request->tokens_count;

            $payment = Payment::where('intent_id', $intentId)->first();
            $paymentId = $payment->id;

            $paymentBundle = DB::table('payments_bundles')->insert(array('payment_id' => $paymentId, 'bundle_id' => $bundleId));
            $payment->status = 'Done';
            $payment->save();

            $updatedTokensCount = $user->tokens_count + $tokens_count;

            $user->tokens_count = $updatedTokensCount;
            $user->save();

            return response(['payment' => $paymentBundle]);

        } catch (Exception $e) {
            return response()->json([
                'errors' => $e->getMessage()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }
}
