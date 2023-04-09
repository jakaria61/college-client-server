import React from 'react';
import logo1 from '../../../image/logo1.png';
import './Header.css';

const Header = () => {
    return (
        <section>
            <div className="text-center ">
                <div class="header-container">
                    <img src={logo1} alt="" />
                    <h1>Imperial College of Engineering</h1>
                </div>
                <h3>Student Registration Form</h3>
                <small class="text-danger">Please Enter your valid information</small>
            </div>
</section>
    );
};

export default Header;