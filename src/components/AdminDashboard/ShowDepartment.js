import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowDepartment = () => {
    const [department,setDepartment]=useState({});
    useEffect(() => {

        fetch(`http://localhost:5000/all-dept`)
            .then(res => res.json())
            .then(data => setDepartment(data))

    }, []);
    console.log(department);
    return (
        <div className='text-center mt-5 ' >
        <h1>Department List</h1>
        {
           department?.length && department.map(departments=> <section className=' row  w-100 bg-info '>
            <div  className='col-md-3 mx-auto roleshow ' >{departments.departmentName}</div>
           </section> )
        }
        <Link to='/adminDashboard'>  <button className="btn btn-outline-success m-2 " >Go to Admin panel</button></Link>
       </div>
    );
};

export default ShowDepartment;