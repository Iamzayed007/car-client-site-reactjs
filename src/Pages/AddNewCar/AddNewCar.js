import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const AddNewCar = () => {



    const history = useHistory()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        
        fetch('https://powerful-beach-17355.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Car Added Successfully');
                    // clearTheCart();
                    reset();
                    history.push('/')
                }
            })
    };
    return (
        <div>

           

        <div>
            <Container>
                <Row className="justify-content-center">
                    <h2 className="text-center mb-4 mt-5">Add New Car</h2>
                    <Col xs={5} sm={6} lg={4} className="text-center form-class pb-3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input required placeholder="Enter Car Name" {...register('name', { required: true })}  /> {/* register an input */}
                            {errors.name && <p className="text-white"> Enter name</p>}
                            <input required placeholder="Enter Brand Name" {...register('brand', { required: true })}  />
                            {errors.brand&& <p className="text-white">Enter brand name</p>}

                            <input required placeholder="Enter Description " {...register('description', { required: true })} /> {/* register an input */}
                            {errors.description  && <p className="text-white">Please Enter Your Description</p>}

                            <input required placeholder="Enter Car Prize" {...register('price', { required: true })} />
                            {errors.price && <p className="text-white">Please Enter Amount</p>}

                            <input required placeholder="URL" {...register('img',{ pattern: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/ } )} />
                            {errors.img && <p className="text-white">Please Enter Image Url Link</p>}


                            <input className="btn btn-outline-warning" type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>

        </div>
    </div>
    );
};

export default AddNewCar;