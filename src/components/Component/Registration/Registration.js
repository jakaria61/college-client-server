import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Registration.css';

const Registration = () => {
    const navigate=useNavigate();
    const handelRegistration=(event)=>{
        event.preventDefault();
        const form = event.target;
        const fristName = form.fristName.value;
        const lastName = form.lastName.value;
        const studentId = form.studentId.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const dob = form.dob.value;
        const password=form.password.value;
        
        const session=form.session.value;
        const fatherName=form.fatherName.value;
        const fphone=form.fphone.value;
        const fprofession=form.fprofession.value;
        const mname=form.mname.value;
        const mphone=form.mphone.value;
        const mprofession=form.mprofession.value;
        const dept=form.dept.value;
        const bgroup=form.bgroup.value;
        const religion=form.religion.value;
        const gender=form.gender.value;
        const street=form.street.value;
        const ps=form.ps.value;
        const dist=form.dist.value;
        const zip=form.zip.value;
        const country=form.country.value;
        const image=form.image.value;

        const student_details= {
            fristName,
            lastName,
            studentId,
            email,
            phone,
            dob,
            password,
            
            session,
            fatherName,
            fphone,
            fprofession,
            mname,
            mphone,
            mprofession,
            dept,
            bgroup,
            religion,
            gender,
            street,
            ps,
            dist,
            zip,
            image,
            country
            

        }
       
        fetch('http://localhost:5000/registration', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(student_details)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                  
                    alert('Registration success');
                    navigate('/login')
                    
                }

            })

        console.log(student_details);

    }
    
    return (
     
    <section>
        <Navbar></Navbar>
        <form  onSubmit={handelRegistration} className="form-details">
            <h1 className='text-center'>Student Registration</h1>
            <p className='text-center text-danger '>Enter your valid information</p>
            <div className="row">
                <div className=" mb-3  col-md-4">
                    <label for="floatingInput" className="mt-4">Enter Your Name <small className="star-color">*</small></label>
                    <input type="Text" name="fristName" className="form-control" id="floatingInput" placeholder="Frist Name"
                        />
                     
                </div>
                <div className=" mt-4 col-md-4 ">
                    <label for="floatingInput" className="">Last Name <small className="star-color">*</small></label>
                    <input type="Text" name="lastName" className="form-control" id="floatingInput" placeholder="Last Name"
                        />
                        
                </div>
                <div className=" mt-4 col-md-4 ">
                    <label for="floatingInput" className="">Student Id<small className="star-color">*</small></label>
                    <input type="number" name="studentId" className="form-control" id="floatingInput" placeholder="Ex-1838520107"
                        />
                        
                </div>
            </div>
            <div className="d-flex row">
                <div className="mb-3 col-md-4 ">
                    <label for="exampleInputEmail1" className="form-label">Enter Your Email <small
                            className="star-color">*</small></label>
                    <input type="email" name="email" className="form-control " id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="name@gmail.com" />
                    
                </div>
                <div className=" mb-3 col-md-4">
                    <label for="inputPassword" className="mb-1">Enter Password <small className="star-color">*</small></label>
                    <input type="password" name="password" className="form-control" id="floatingInput"
                        placeholder="Must have at least 6 characters" />
                       
                </div>
                <div className=" mb-3 col-md-4">
                    <label for="inputPassword" className="mb-1">Conform Password <small className="star-color">*</small></label>
                    <input type="password" name="conformPassword" className="form-control" id="floatingInput"
                        placeholder="Must have at least 6 characters" required/>

                </div>

            </div>
            <div className="d-flex row">
                <div className=" mb-3  col-md-4 ">
                    <label for="floatingInput" className="mb-1">Enter Your Phone Number <small
                            className="star-color">*</small></label>
                    <input type="number" name="phone" className="form-control" id="floatingInput"
                        placeholder="+8801-XXXXXXXX" required/>

                </div>
                <div className=" mb-3 col-md-4">
                    <label for="floatingInput" className="mb-1">Select Your Date Of Birth <small
                            className="star-color">*</small></label>
                    <input type="date" name="dob" className="form-control" id="floatingInput" required/>

                </div>
                <div className=" mb-3 col-md-4">
                    <label for="floatingInput" className="mb-1">Session <small className="star-color">*</small></label>
                    <input type="number" name="session" className="form-control" id="floatingInput"
                        placeholder="i.e 2017-18" required/>

                </div>

            </div>
            <div className=" mb-3">
                <label for="floatingInput" className="mb-1">Enter Your Father Name <small
                        className="star-color">*</small></label>
                <input type="Text" name="fatherName" className="form-control" id="floatingInput" placeholder="John deo"
                    required/>

            </div>
            <div className="d-flex row">
                <div className=" mb-3  col-md-4 ">
                    <label for="floatingInput" className="mb-1">Enter Your Father Phone Number <small
                            className="star-color">*</small></label>
                    <input type="number" name="fphone" className="form-control" id="floatingInput"
                        placeholder="01XXX-XXXXX-XXX" required/>

                </div>

                <div className=" mb-3 col-md-4">
                    <label for="floatingInput" className="mb-1">Enter Your Father Email:</label>
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@gmail.com"/>

                </div>
                <div className=" mb-3 col-md-4">
                    <label for="floatingInput" className="mb-1">Enter Your Father Profession <small
                            className="star-color">*</small></label>
                    <input type="text" name="fprofession" className="form-control" id="floatingInput"
                        placeholder="i.e Engineer" required/>

                </div>

            </div>
            <div className=" mb-3">
                <label for="floatingInput" className="mb-1">Enter Your Mother Name <small
                        className="star-color">*</small></label>
                <input type="Text" name="mname" className="form-control" id="floatingInput" placeholder="Lucky" required/>

            </div>
            <div className="d-flex row">
                <div className=" mb-3  col-md-4 ">
                    <label for="floatingInput" className="mb-1">Enter Your Mother Phone Number <small
                            className="star-color">*</small></label>
                    <input type="number" name="mphone" className="form-control" id="floatingInput"
                        placeholder="01XXX-XXXXX-XXX" required/>

                </div>

                <div className=" mb-3 col-md-4">
                    <label for="floatingInput" className="mb-1">Enter Your Mother Email:</label>
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@gmail.com"/>

                </div>
                <div className=" mb-3 col-md-4">
                    <label for="floatingInput" className="mb-1">Enter Your Mother Profession <small
                            className="star-color">*</small></label>
                    <input type="text" name="mprofession" className="form-control" id="floatingInput"
                        placeholder="i.e Doctor"/>

                </div>

            </div>


            <div className=" mb-3 ">
                <label for="dept">Select your Department <small className="star-color">*</small></label>
                <select name="dept" id="dept" required>
                    <option value="">Select</option>
                    <option value="CSE">Computer Science And Engineering</option>
                    <option value="EEE">Electrical & Electronics Engineering</option>
                    <option value="CE">Civil Engineering</option>
                    <option value="ME">Mechanical Engineering</option>
                    <option value="TE">Textile Engineering</option>
                </select>

            </div>
            <div className=" mb-3 ">
                <label for="bgroup">Select Your Blood Group <small className="star-color">*</small></label>
                <select name="bgroup" id="bgroup" required>
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>

            </div>

            <div className=" mb-3 ">
                <label for="religion">Select your Religion <small className="star-color">*</small></label>
                <select name="religion" id="region" required>
                    <option value="">Select</option>
                    <option value="Islam">Islam</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Khristan">Khristan</option>
                    <option value="Buddho">Bdudhist</option>

                </select>

            </div>
            <div className=" mb-3 ">
                <label for="floatingInput" className="mr-1">Select Your Gender <small className="star-color">*</small></label>
                <input className="form-check-input" type="radio" name="gender" value="Male" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">Male</label>
                <input className="form-check-input" type="radio" name="gender" value="FeMale" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">FeMale</label>
                <input className="form-check-input" type="radio" name="gender" value="Others" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">Others</label>

            </div>


            <div className=" mb-3 ">
                <label for="floatingInput" className="mb-1">Enter Your Present Address <small
                        className="star-color">*</small></label>
                <input type="text" name="street" className="form-control" id="floatingInput"
                    placeholder="street address"/><br/>

                <div className="row">
                    <div className="col-md-3 mb-4"><input type="text" name="ps" className="form-control" id="floatingInput"
                            placeholder="P.S "/>
                    </div><br/>
                    <div className="col-md-3 mb-4"> <input type="text" name='dist' className="form-control" id="floatingInput"
                            placeholder="Dist."/>
                    </div>

                    <div className="col-md-3">
                        <input type="number" name="zip" className="form-control" id="floatingInput" placeholder="ZIP"/><br/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="country" className="form-control" id="floatingInput"
                            placeholder="Country"/><br/>
                    </div>
                </div>

            </div>
            <div className=" mb-3 ">
                <label for="floatingInput" className="mb-1">Enter Your Parmanent Address <small
                        className="star-color">*</small></label>
                <input type="text" className="form-control" id="floatingInput" placeholder="street address"/><br/>

                <div className="row">
                    <div className="col-md-3 mb-4"><input type="text" className="form-control" id="floatingInput"
                            placeholder="P.S "/>
                    </div><br/>
                    <div className="col-md-3 mb-4"> <input type="text" className="form-control" id="floatingInput"
                            placeholder="Dist."/>
                    </div>

                    <div className="col-md-3 ">
                        <input type="number" className="form-control" id="floatingInput" placeholder="ZIP"/><br/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Country"/><br/>
                    </div>
                </div>

            </div>
           {/* image upload  */}
            <div className=" mb-3">
                <label for="Image">Insert Your Image <small className="star-color">*</small></label><br/>
                <input type="file" name="image" accept="image"/>

            </div>

           {/* terms and conditions  */}

            <h5 className="bg-secondary p-3 text-white">Terms And Conditions <small className="star-color">*</small></h5>


            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                <label className="form-check-label" for="defaultCheck1">
                    I certify that the above information provided by me is correct.
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                <label className="form-check-label" for="defaultCheck2">
                    I undertake to submit all the documents is original for verification.
                </label>
            </div>

            <div className="button-control ">
                <button type="reset"  className="btn btn-success me-2">Reset</button>
                <input type="submit" className="btn btn-success"></input>
            </div>

        </form>
            <section>
            <div className="text-center">
            <p>Already Have An Account? <Link to='/login'>Login</Link> </p>
        </div>
            </section>
            <Footer></Footer>
    </section>
    
        
    );
};

export default Registration;