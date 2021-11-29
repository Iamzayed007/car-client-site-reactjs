import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import Car from '../Car/Car';


const Cars = () => {

    const [cars, setCars] = useState([])
    

    useEffect(() => {
        fetch('https://powerful-beach-17355.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    const carData = cars.slice(0,8)

    return (
        <div id="latest">
          <h1>Our Latest Car</h1>
            {
                !cars.length ?  
                <div className="text-center mt-5">
                    <Spinner animation="grow" />
                </div>
           :

           
                <Row xs={1} md={2} lg={4} className="g-4 my-5 w-100">
                    {carData.map((car, idx) => (
                        <Car

                            car={car}
                        />
                    ))}
                </Row>}

         

        </div>
    );
};

export default Cars;