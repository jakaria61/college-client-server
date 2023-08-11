import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentReceive = () => {
    const [ payment, setPayments ] = useState({});
    useEffect(() => {

        fetch(`http://localhost:5000/all-payments`)
            .then(res => res.json())
            .then(data => setPayments(data))

    }, []);
    console.log(payment);
    return (
        <div className='text-center mt-5 ' >
            <h1 className='text-center text-success'>Payment Received</h1>
            <Link to={'/adminDashboard'} >  <button className='btn btn-outline-success'> Go to Dashboard </button> </Link>

            {
                payment?.length && payment.map(payments => <section className='m-5'>
                    <table className='mt-5'>
                        <tr>
                            <th>Fee</th>
                            <th>Student Id</th>
                            <th>Transaction Id</th>



                        </tr>
                        <tr>
                            <td> {payments.tutionFee} </td>
                            <td> {payments.StudentId}</td>
                            <td> {payments.transactionId}</td>



                        </tr>

                    </table>
                </section>)
            }

        </div>
    );
};

export default PaymentReceive;