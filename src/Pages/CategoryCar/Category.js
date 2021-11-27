import React from 'react';
import './Category.css'

const Category = () => {
    return (
        <div className="mb-5">
            
        <h1 className="top-facilities mt-5 mb-5">Most Popular Category</h1>
        
       
        <div className="container" >

            <div className="row">
            <div className="images col-sm-12 col-lg-4">
                <span className="icon"></span>
                <h3 className="text-facilities">WIDE RANGE OF BRANDS</h3>
                <p className="text-center">With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW.</p>

            </div>
            <div className=" images col-sm-12 col-lg-4">
            <span className="icon"></span>
                <h3 className="text-facilities">TRUSTED BY THOUSANDS</h3>
                <p className="text-center ">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>

            </div>
            <div className="images col-sm-12 col-lg-4">
            <span className="icon"></span>
                <h3 className="text-facilities">SERVICE & MAINTENANCE</h3>
                <p className="text-center">Our service department maintain your car to stay safe on the road for many more years.</p>

            </div>
    
            </div>
        </div>
        
    </div>
    );
};

export default Category;