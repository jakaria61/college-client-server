import React from 'react';
import { useNavigate } from 'react-router-dom';


const AddDepartment = () => {
    const navigate = useNavigate()
    const addDept = (event) => {

        event.preventDefault();
        const form = event.target;
        const departmentName = form.departmentName.value;
        const department_details = {
            departmentName
        }
        fetch('http://localhost:5000/addDepartment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(department_details)
        })
            .then(res => res.json())
            .then(res =>

                console.log(res)

            );
        navigate('/department')
        alert('Department added in database..')

        console.log(department_details);
    }
    return (
        <div>
            <h1 className='text-center text-success mt-5'>Add Department</h1>
            <div className="col-md-8 m-5 ">
                <form onSubmit={addDept} >

                    <div className=" mb-3  col-md-8">
                        <label for="floatingInput" className="mt-4">Enter Department Name </label>
                        <input type="Text" name="departmentName" className="form-control" id="floatingInput" placeholder="Computer science and Engineering"
                            required />

                    </div>

                    <button type="submit" className="btn btn-success" >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDepartment;