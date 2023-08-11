import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowDepartment from './ShowDepartment';
import '../AdminDashboard/showdept.css'



const AdminDashboard = () => {
    const [ studentData, setStudnetData ] = useState({});


    useEffect(() => {

        fetch(`http://localhost:5000/all-student`)
            .then(res => res.json())
            .then(data => setStudnetData(data))

    }, []);
    console.log(studentData);

    return (
        <section className='w-100 '>
            <h1 className='text-danger text-center mt-3'>Welcome to the admin pannel</h1>
            <section>
                <section className='m-5 text-center details-container '>
                    <div className='row w-100   '>
                        <div className='col-md-3 mx-auto roleshow'>
                            <Link to='/addDepartment'>  <button className="btn btn-outline-success m-2 " >Add Department</button></Link>
                        </div>
                        <div className='col-md-3 mx-auto roleshow'>
                            <Link to='/registration'>  <button className="btn btn-outline-success m-2 " >Add Student</button></Link>
                        </div>
                        <div className='col-md-3 mx-auto roleshow'>
                            <Link to='/department'>  <button className="btn btn-outline-success m-2 " >Show Department</button></Link>
                        </div>

                    </div>
                    <div className='row w-100 '>
                        <div className='col-md-3 mx-auto roleshow'>
                            <Link to='/manage-student'>  <button className="btn btn-outline-success m-2 " >Delete student</button></Link>
                        </div>
                        <div className='col-md-3 mx-auto roleshow'>
                            <Link to='/teacher'>  <button className="btn btn-outline-success m-2 " >Teacher List</button></Link>
                        </div>
                        <div className='col-md-3 mx-auto roleshow'>
                            <Link to='/payments'>  <button className="btn btn-outline-success m-2 " > Received payment</button></Link>
                        </div>


                    </div>
                </section>
                <h1 className='text-center mt-5'>Total Students List</h1>
                {
                    studentData?.length && studentData.map(students =>
                        <section className='m-5'>
                            <table className='mt-5'>
                                <tr>
                                    <th>Student Name</th>
                                    <th>Departmanet</th>
                                    <th>Student ID</th>
                                    <th>Set Balance</th>

                                </tr>
                                <tr>

                                    <td> {students.fristName} {students.lastName}</td>
                                    <td> {students.dept}</td>
                                    <td> {students.studentId}</td>
                                    <td>
                                        <Link to={`/managePayment/${students._id
                                            }`}><button className="btn btn-outline-success m-1  " > Set Balance</button>  </Link>
                                    </td>
                                </tr>

                            </table>
                        </section>

                    )
                }
            </section>

        </section>
    );
};

export default AdminDashboard;