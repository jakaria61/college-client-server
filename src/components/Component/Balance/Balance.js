import React, { useEffect, useState } from 'react';
import './Balance.css'
import { Link, useNavigate, useParams } from 'react-router-dom';


const Balance = () => {
    const [ paymentData, setPaymentData ] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/balance/${id}`)
            .then(res => res.json())
            .then(data => setPaymentData(data))
    }, [ id ])
    console.log(paymentData);

    return (
        <section className='container mt-5 '>
            <h1 className='text-center bg-success text-white p-3'>Dear student please clear your due as soon as possible.</h1>
            <table className='mt-5'>
                <tr>

                    <th>Tution Fee</th>
                    <th>Pay Now</th>
                    <th>Semister Fee</th>
                    <th>Pay Now</th>
                    <th>Ru Exam Fee</th>
                    <th>Pay Now</th>
                    <th>Total</th>
                    <th>Pay Now</th>


                </tr>
                <tr>
                    <td> <h4>TK {paymentData?.tutionFee} </h4> </td>
                    <td> <Link to={`/balance/payment/${paymentData?.StudentId}`}><button className='btn btn-outline-success'>Pay now</button></Link> </td>
                    <td> <h4>TK {paymentData?.semisterFee} </h4> </td>
                    <td> <Link to={`/balance/payment/${id}`}><button className='btn btn-outline-success m-2'>Pay now</button></Link> </td>
                    <td> <h4>{paymentData?.RuExamFee}</h4> </td>
                    <td> <Link to={`/balance/payment/${id}`}><button className='btn btn-outline-success m-2'>Pay now</button></Link> </td>
                    <td> <h4> {parseFloat(paymentData.tutionFee) + parseFloat(paymentData.semisterFee) + parseFloat(paymentData.RuExamFee)} </h4> </td>
                    <td> <Link to={`/balance/payment/${id}`}><button className='btn btn-outline-success m-2'>Pay now</button></Link> </td>

                </tr>

            </table>
        </section>
    );
};

export default Balance;