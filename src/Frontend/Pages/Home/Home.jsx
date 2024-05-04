import React from 'react';
import './Home.css';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import NavBar from '../../Components/NavBar/NavBar';
import HomeFeatures from '../../Components/HomeFeatures/HomeFeatures';
import HomePricing from '../../Components/HomePricing/HomePricing';
import Footer from '../../Components/Footer/Footer';
export default function Home() {
  return (
    <>
    <div className="homecontainer">
      <NavBar/>
      <HomeSlider/>
      <h1 class="mt-5 mb-4 text-center">What we Offer</h1>  
      <div className="features">
        <HomeFeatures/>
      </div>
      <h1 class="mt-5 mb-4 text-center">What we Offer</h1>  
      <div className="features">
      <HomePricing/>
      </div>

      <Footer/>

      </div>
    </>
  );
}
