import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

const CheckoutForm = ({ payment }) => {
  const [ cardError, setCardError ] = useState('');
  const [ success, setSuccess ] = useState('');
  const [ transactionId, setTransactionId ] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [ clientSecret, setClientSecret ] = useState('');
  const { tutionFee, id, StudentId } = payment;

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({ tutionFee })
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
  }, [ tutionFee ])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {

      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });
    if (error) {
      console.log(error);
      setCardError(error.message)
    }
    else {
      setCardError('');
    }
    setSuccess('')
    const { paymentIntent, error: conformError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: StudentId,
          },
        },
      },

    );
    if (conformError) {
      setCardError(conformError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setSuccess("Your payment succesful.");
      setTransactionId(paymentIntent.id);
      //store payment info in database
      const payment = {
        tutionFee,
        StudentId,
        transactionId: paymentIntent.id,


      }
      fetch("http://localhost:5000/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            setSuccess("Your payment succesful.");
            setTransactionId(paymentIntent.id);
          }
        })
    }
    console.log('paymentIntent', paymentIntent);

  }
  return (
    <section className='card-design '>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-outline-success m-4' type="submit" disabled={!stripe || !clientSecret}>
          Pay Now
        </button>
      </form>
      <h5 className='text-center text-danger'>{cardError}</h5>
      {
        success && <div className='payment-result-card'>
          <p className='text-center text-sucess'>{success} We will update your payment details</p>
          <p>Your Transaction Id is:{transactionId}</p>

        </div>
      }
    </section>
  );
};

export default CheckoutForm;