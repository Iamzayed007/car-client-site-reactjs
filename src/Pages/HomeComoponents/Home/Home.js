import React from 'react';
import Category from '../../CategoryCar/Category';
import ReviewHome from '../../Reviews/ReviewHome/ReviewHome';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Cars></Cars>
            <ReviewHome></ReviewHome>
            <Category></Category>
            <Footer />

        </div>
    );
};

export default Home;