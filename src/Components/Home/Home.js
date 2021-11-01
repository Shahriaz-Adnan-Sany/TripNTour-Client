import React from 'react';
import HomeFeature from './HomeFeature/HomeFeature';
import HomeItems from './HomeItems/HomeItems';
import Slider from './Slider/Slider';
import Subscribe from './Subscribe/Subscribe';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeFeature></HomeFeature>
            <HomeItems></HomeItems>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;