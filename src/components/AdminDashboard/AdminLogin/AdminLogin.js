import React from 'react';
import admin from '../../../image/student.jpg';
import { useForm } from 'react-hook-form';

const AdminLogin = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin=(event)=>{
        event.preventDefault();
    }
    return (
        <section className="login-form-control m-5">
                <div className="row w-100 ">
                    <div className="col-md-4 text-center mt-5">
                        <h3>Admin Login</h3>
                        <p>Make sure your account is secure.</p>
                        <img src={admin} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8 ">
                        <form onSubmit={handleSubmit(handleLogin)} className="login-control" >
                            <div className="mb-3 ">
                                <label for="exampleInputEmail1" className="form-label">Enter Your Email <small
                                    className="star-color">*</small></label>
                                <input type="email" name="email" className="form-control " id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="name@gmail.com" {...register("email", { required: "Email Address is required" })} />
                                    {errors.email && <p className='text-danger' >{errors.email?.message}</p>}
                                
                            </div>
                            <div className="mb-3  ">
                                <label for="exampleInputPassword1" className="form-label">Enter Your Password <small
                                    className="star-color">*</small></label>
                                <input type="password" name="password" className="form-control " id="exampleInputPassword1"
                                    placeholder="Must have at least 6 characters" {...register("password",{required:"Password  is required",minLength:{value:6,message:"Password must be 6 character or longer."} })} />
                                    {errors.password && <p className='text-danger'>{errors.password?.message}</p>}
                            </div>
                           
                           
                            <button type="submit" className="btn btn-success" >Login</button>

                        </form>
                    </div>
                </div>
            </section>
    );
};

export default AdminLogin;