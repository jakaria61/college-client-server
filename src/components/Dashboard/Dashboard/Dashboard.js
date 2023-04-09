import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Dashboard = () => {
    const [studentData, setStudnetData] = useState({});
    const navigate=useNavigate();
  
    useEffect(() => {

        fetch(`http://localhost:5000/student-info`, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(res => res.json())
            .then(data => setStudnetData(data))

    }, []);

  

    return (

        <section className="container py-5 ">
            <h1 className='text-center text-success'>Well come {studentData.fristName} {studentData.lastName}</h1>
            
        
            <table className='mt-5'>
                <tr>
                    <th>FristName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Birth</th>
                    <th>Department</th>
                    <th>StudentId</th>
                    <th>Session</th>
                    <th>Gender</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td><p>{studentData.fristName}</p></td>
                    <td><p>{studentData.lastName}</p> </td>
                    <td><p>{studentData.email}</p></td>
                    <td><p>{studentData.phone}</p></td>
                    <td><p>{studentData.dob}</p></td>
                    <td><p>{studentData.dept}</p></td>
                    <td><p>{studentData.studentId}</p></td>
                    <td><p>{studentData.session}</p></td>
                    <td><p>{studentData.gender}</p></td>
                    <td><p>{studentData.country}</p></td>
                </tr>
            </table>
            <div className='text-center mt-5'>
            <button className='btn btn-outline-success' ><Link to='/Balance'>Click to show your Due money</Link></button>
           
            </div>

        </section>

    );
};

export default Dashboard;