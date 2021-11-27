import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Car from '../Car/Car';

const Cars = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('https://powerful-bastion-59588.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div>
            <Header />
            {
                !cars.length ?
                <div className="text-center mt-5">
                    <Spinner animation="grow" />
                </div>
            :

           
                <Row xs={1} md={2} lg={4} className="g-4 my-5 w-100">
                    {cars.map((car, idx) => (
                        <Car

                            car={car}
                        />
                    ))}
                </Row>}

            <Footer />

        </div>
    );
};

export default Cars;