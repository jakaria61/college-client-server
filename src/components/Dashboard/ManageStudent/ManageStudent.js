import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageStudent = () => {
    const [ studentData, setStudnetData ] = useState({});


    useEffect(() => {

        fetch(`http://localhost:5000/all-student/`)
            .then(res => res.json())
            .then(data => setStudnetData(data))

    }, []);
    console.log(studentData);
    const deleteStudent = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/all-student/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('data delete');
                }
            })

    }
    return (
        <section className='row w-100 '>
            <h3 className='text-center text-danger mt-5'>Delete student </h3>

            <section className='m-4'>
                {
                    studentData?.length && studentData.map(students =>



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
                                <td><button onClick={() => deleteStudent(students._id)} className='btn btn-outline-danger m-2 '>Delete Student</button></td>
                            </tr>

                        </table>

                    )
                }
            </section>
        </section >
    );
};

export default ManageStudent;