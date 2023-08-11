import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddAdmin = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handelAdmin=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    
    const admin_details= {
        email,
        password
    }
    fetch('http://localhost:5000/admin', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(admin_details)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
              
                alert('Registration success');
                
                
            }

        })

    console.log(admin_details);
    }
  
    return (
        <section className='row w-100'>
            <div className="col-md-6 m-5">
                <h3 className='py-3 text-primary'> Admin</h3> <hr/>
                <form onSubmit={handelAdmin}>
                <label for="exampleInputEmail1" className="form-label mt-2">Enter Your Email <small
                            className="star-color">*</small></label>
                    <input type="email" name="email" className="form-control mt-2 " id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="name@gmail.com" required />
                    
                    <label for="inputPassword" className="mt-2">Enter Password <small className="star-color">*</small></label>
                    <input type="password" name="password" className="form-control mt-2" id="floatingInput"
                        placeholder="Must have at least 6 characters" required/>
                    <input className='btn btn-primary mt-2' type="submit" value='add Admin' />
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;