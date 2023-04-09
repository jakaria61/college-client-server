import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import student from '../../../image/student.jpg';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';



const Login = () => {
    const [token , setToken] = useState('');
    const [error, setError] = useState({});
    const [uemail,setuemail]=useState({});
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleLogin =async(data)=>{
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setError(data)
                setuemail(data);
                if(data.token){
                    localStorage.setItem("token", data.token);
                    setToken(localStorage.getItem('token'))
                    navigate("/dashboard")
                }
            })
            .catch(err => console.log(err))
    } 
console.log(error)

    
    return (
        <section>
            <Navbar></Navbar>
            <section className="login-form-control m-5">
                <div className="row w-100 ">
                    <div className="col-md-4 text-center mt-5">
                        <h3>Student Login</h3>
                        <p>Make sure your account is secure.</p>
                        <img src={student} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8 ">
                        <form onSubmit={handleSubmit(handleLogin)} className="login-control" >
                            {
                                error?.message && <p className='text-center text-danger'>{error?.message}</p>
                            }
                           
                            <div className="mb-3 ">
                                <label for="exampleInputEmail1" className="form-label">Enter Your Email <small
                                    className="star-color">*</small></label>
                                <input type="email" name="email" className="form-control " id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="name@gmail.com" {...register("email", { required: "Email Address is required" })} />
                                    {errors.email && <p className='text-danger' >{errors.email?.message}</p>}
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                
                            </div>
                            <div className="mb-3  ">
                                <label for="exampleInputPassword1" className="form-label">Enter Your Password <small
                                    className="star-color">*</small></label>
                                <input type="password" name="password" className="form-control " id="exampleInputPassword1"
                                    placeholder="Must have at least 6 characters" {...register("password",{required:"Password  is required",minLength:{value:6,message:"Password must be 6 character or longer."} })} />
                                    {errors.password && <p className='text-danger'>{errors.password?.message}</p>}
                            </div>
                           
                           
                            <button type="submit" className="btn btn-success" >Login</button>

                            <button className="btn btn-success m-2 signUp" ><Link to='/registration'>Sign up</Link></button>

                        </form>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </section>
    );
};

export default Login;