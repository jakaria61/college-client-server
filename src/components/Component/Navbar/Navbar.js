import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/logo.png';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

                <Link to='/home'> <img className="navbar-brand" src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/registration' className="nav-link active" aria-current="page" href="#">Registration</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/login' className="nav-link active" aria-current="page" href="#">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;