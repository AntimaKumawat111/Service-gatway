import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckOutForm";

const stripePromise = loadStripe("your-publishable-key"); // Add your Stripe key here.

const Payment = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Complete Your Payment
          </h1>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
