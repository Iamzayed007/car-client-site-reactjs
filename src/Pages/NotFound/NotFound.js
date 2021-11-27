import React from 'react';
import errorImge from '../images/not.jpg'

const NotFound = () => {
    return (
        <div>
        <img className="w-100 mt-5" src={errorImge} alt="" />
    </div>
    );
};

export default NotFound;