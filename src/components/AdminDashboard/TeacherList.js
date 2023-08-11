import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TeacherList = () => {
    const [teacher, setTeacher] = useState({});
    useEffect(() => {

        fetch(`http://localhost:5000/all-teacher`)
            .then(res => res.json())
            .then(data => setTeacher(data))

    }, []);
    console.log(teacher);
    return (
        <div className='text-center mt-5 ' >
            <h1>Teacher List</h1>
         <Link to={'/addTeacher'} >  <button className='btn btn-outline-success'> add Teacher </button> </Link> 
         <Link to={'/adminDashboard'} >  <button className='btn btn-outline-success'> Go to Dashboard </button> </Link> 
            {
                teacher?.length && teacher.map(teachers => <section>
                    <table className='mt-5'>
                        <tr>
                            <th>Teacher Name</th>
                            <th>Departmanet</th>
                            <th>Qualification</th>
                            <th>Designation</th>

                        </tr>
                        <tr>
                            <td> {teachers.teacherName} </td>
                            <td> {teachers.dept}</td>
                            <td> {teachers.qualification}</td>
                            <td> {teachers.designation}</td>

                        </tr>

                    </table>
                </section>)
            }

        </div>
    );
};

export default TeacherList;