import React, { useState } from 'react';
import { useForm } from "react-hook-form";


const AddAdmin = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const admindata = {
            email: data.email,
            role: 'admin'
        }
        console.log(admindata);
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(admindata)
        })
        .then(res => console.log(res));
        alert('Admin added successfully.');
    };
    return (
        <section className='row'>
            <div className="col-md-8 m-2">
                <h3 className='py-3 text-primary'> Admin</h3> <hr/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email", { required: true })} placeholder='Enter Email' size='50'/> <br/>
                    {errors.email && <span>This field is required</span>} <br/>

                    <input className='btn btn-primary' type="submit" value='add Admin' />
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;