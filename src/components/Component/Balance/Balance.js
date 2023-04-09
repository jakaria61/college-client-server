import React from 'react';
import './Balance.css'
const Balance = () => {
    return (
        <section className='container mt-5 '>
            <h1 className='text-center text-danger'>Dear student this is your Balance record</h1>
            <table className='mt-5'>
                <tr>
                    <th>Tution Fee</th>
                    <th>Semister Fee</th>
                    <th>Ru Exam Fee</th>
                    <th>Total Due</th>
                </tr>
                <tr>
                    <td>$400</td>
                    <td>$500</td>
                    <td>$600</td>
                    <td>$1500</td>
                </tr>
               
            </table>
        </section>
    );
};

export default Balance;