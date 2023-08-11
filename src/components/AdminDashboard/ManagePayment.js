import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ManagePayment = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const handelPayment = (event) => {
        event.preventDefault();
        const form = event.target;
        const tutionFee = form.tutionFee.value;
        const semisterFee = form.semisterFee.value;
        const RuExamFee = form.RuExamFee.value;


        const payment_details = {

            tutionFee,
            semisterFee,
            RuExamFee,
            StudentId: id
        }
        console.log(payment_details);
        fetch('http://localhost:5000/payment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(payment_details)
        })
            .then(res => res.json())
            .then(data => {
                alert('Payment set done')
                console.log(data);
                navigate(`/adminDashboard`)

            })
            .catch(err => console.log(err))
    }
    return (
        <div>

            <div className="row  m-2">
                <h3 className='py-3 text-primary'> Enter the total fee.</h3> <hr />
                <form onSubmit={handelPayment}>


                    <div className='col-md-4 mt-3' >
                        <label for="inputText" className="mb-1">Tution Fee <small className="star-color">*</small></label>
                        <input type="number" name="tutionFee" className="form-control" id="floatingInput"
                            placeholder="BDT 40000" required />
                    </div>
                    <div className='col-md-4 mt-3' >
                        <label for="inputText" className="mb-1">Semister Fee <small className="star-color">*</small></label>
                        <input type="number" name="semisterFee" className="form-control" id="floatingInput"
                            placeholder="BDT 40000" required />
                    </div>
                    <div className='col-md-4 mt-3' >
                        <label for="inputText" className="mb-1">Ru Exam Fee <small className="star-color">*</small></label>
                        <input type="number" name="RuExamFee" className="form-control" id="floatingInput"
                            placeholder="BDT 40000" required />
                    </div>
                    <input className='btn btn-primary mt-3' type="submit" value='submit' />
                </form>
            </div>


        </div>
    );
};

export default ManagePayment;