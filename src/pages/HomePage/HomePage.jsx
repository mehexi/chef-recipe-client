import React from 'react';
import HeroSection from '../../componat/HeroSection';
import MealsSection from './MealsSection';
import VideoSection from './VideoSection';
import Subscribe from './Subscribe';
import Footer from '../../componat/Footer';

const HomePage = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <MealsSection></MealsSection>
            <VideoSection></VideoSection>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </>
    );
};

export default HomePage;