import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm'
const stripePromise = loadStripe('pk_test_51NUYToD3NZeEfHWEwI2WU4vWGwQRch2gd7jdfmylTZWNzTSWQMdG3IUkplxQuh8d3ebGMSMIsXwODGx3LksR5XbQ00Tgn7vYKK');
console.log(stripePromise);
const Payment = () => {
    const payment = useLoaderData();
    console.log(payment);
    const {email, tutionFee,_id, semisterFee, StudentId, RuExamFee } = payment;
    return (
        <div>
     <h1 className='text-center bg-success text-white p-3 m-4'>Dear student please input valid card details.</h1>

            <div className='col-md-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    payment={payment}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;