import React from 'react';
import './Home.css';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
// import NavBar from '../../Components/NavBar/Navbar';
import HomeFeatures from '../../Components/HomeFeatures/HomeFeatures';
import HomePricing from '../../Components/HomePricing/HomePricing';
// import Footer from '../../Components/Footer/Footer';
import HomeTestimonials from '../../Components/HomeTestimonials/HomeTestimonials';
export default function Home() {
  return (
    <>
    <div className="homecontainer">
      {/* <NavBar/> */}
      <HomeSlider/>
      <h1 className='class="mt-5 mb-5 text-center'style={{ fontSize: '4em' }}>What we Offer</h1>  
      <h1>hello</h1>
      <div className="features">
        <HomeFeatures/>
      </div>
     
      <h1 className='class="mt-5 mb-4 text-center'style={{ fontSize: '4em' }}>What we Offer</h1>
      <div className="abc">
      <HomePricing/>
      </div>
      <HomeTestimonials/>
      </div>
    </>
  );
}
