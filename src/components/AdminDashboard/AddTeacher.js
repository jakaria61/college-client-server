import React from 'react';
import { Link } from 'react-router-dom';

const AddTeacher = () => {
    const addTeacher = (event) => {
        event.preventDefault();
        const form = event.target;
        const teacherName = form.teacherName.value;
        const dept = form.dept.value;
        const qualification = form.qualification.value;
        const designation = form.designation.value;
        const teacher_details = {
            teacherName,
            dept,
            designation,
            qualification

        }
        fetch('http://localhost:5000/addTeacher', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(teacher_details)
        })
            .then(res => res.json())
            .then(res => console.log(res));
        alert('Teacher added in database..')

        console.log(teacher_details);
    }
    return (
        <div>
            <h1 className='text-center text-success mt-5'>Add Teacher</h1>
            <div className="col-md-8 m-5 ">
                <form onSubmit={addTeacher} >

                    <div className=" mb-3  col-md-8">
                        <label for="floatingInput" className="mt-4">Enter teacher name </label>
                        <input type="Text" name="teacherName" className="form-control" id="floatingInput" placeholder="Md.Noman"
                            required />

                    </div>
                    <div className=" mb-3  col-md-8">
                        <label for="floatingInput" className="mt-4">Enter department name </label>
                        <input type="Text" name="dept" className="form-control" id="floatingInput" placeholder="Computer science and Engineering"
                            required />

                    </div>
                    <div className=" mb-3  col-md-8">
                        <label for="floatingInput" className="mt-4">Enter qualification  </label>
                        <input type="Text" name="qualification" className="form-control" id="floatingInput" placeholder="BSC in CSE"
                            required />

                    </div>
                    <div className=" mb-3  col-md-8">
                        <label for="floatingInput" className="mt-4">Enter designation  </label>
                        <input type="Text" name="designation" className="form-control" id="floatingInput" placeholder="Professor"
                            required />

                    </div>

                    <Link to={"/teacher"}><button type="submit" className="btn btn-success" >Submit</button></Link>
                </form>
            </div>
        </div>
    );
};

export default AddTeacher;