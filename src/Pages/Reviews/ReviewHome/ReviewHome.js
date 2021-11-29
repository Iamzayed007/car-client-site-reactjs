
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  Container, Row } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';
import './ReviewHome.css'



const ReviewHome = () => {
    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        const uri = `https://powerful-beach-17355.herokuapp.com/review`
        fetch(uri)
            .then(res=>res.json())
            .then(data => {
                console.log(data)
                setreviews(data)
            })
    }, [])
    var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, 
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
        <div className="text-center mb-5 ">
            <h1>Checkout Our Customer Reviews</h1>
            
            </div>
        <div className="reviews" id="reviews">
            <div className="second-section">
                {/* <img src={photo} alt=""  /> */}
            </div>
            
            
            <Container>
           
            <Slider {...settings}>
            {
                reviews.map(review => <SingleReview
                    key={review._id}
                    review={review}
                />)
            }   
            </Slider>
           
            </Container>
        </div >
        </>
    );

};

export default ReviewHome;