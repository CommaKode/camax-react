import React from 'react';
import Hero from '../components/Hero/Hero';
import SuggestionCar from '../components/Suggestion/SuggestionCar';
import HomePageCar from '../components/Carousel/HomePageCar';
import AboutUs from '../components/AboutUs/AboutUs';

const Home = () => {
  return (
    <React.Fragment>
      <Hero cName="hero-line" />
      <SuggestionCar />
      <HomePageCar cName="car-line" />
      <AboutUs cName="aboutus-line" />
    </React.Fragment>
  );
};

export default Home;
