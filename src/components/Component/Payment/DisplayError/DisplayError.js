import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error =useRouteError();
    return (
        <div>
            <p className='text-center text-danger'> opps! something is worng</p>
            <p>{error.statusText || error.messages}</p>
        </div>
    );
};

export default DisplayError;