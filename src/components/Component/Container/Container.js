import React from 'react';
import { Link } from 'react-router-dom';

const Container = () => {
    return (
        <div>
          <Link to='/home'>Home</Link>  
          <Link to='/registration'>Registration</Link>  
          <Link to ='/login'> Login</Link>
        </div>
    );
};

export default Container;