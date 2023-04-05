import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Newsletter from '../partials/Newsletter';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Footer from '../partials/Footer';
import Mall from '../images/mall.png'
import FeaturesBg from '../images/features-bg.png';
import Box from '../images/Box.png';

function MallsHome() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome text="Give Shopping Centers Superpowers"/>
        <FeaturesHome 
        title="Ping Path is a powerful tool for business" text="By providing an easy-to-use navigation system, Ping Path helps shoppers effortlessly locate their desired stores, products, and services, resulting in a more enjoyable and efficient shopping experience." 
        firstTitle="Improved customer navigation" firstText="Ping Path empowers the visually impaired to more easily navigate the world with indoor maps" firstImg={Mall}
        secondTitle="Enhanced accessibility for visually impaired visitors" secondText="Ping Path's tools empower visually impaired to navigate your shopping center with greater confidence and independence, fostering a more inclusive and welcoming environment." secondImg={FeaturesBg}
        thirdTitle="Streamlined retailer operations" thirdText="Our spatial data can assist your retailers in optimizing store layouts, inventory management, and customer service, enabling them to maximize sales and customer satisfaction." thirdImg={Box}/>
        <FeaturesBlocks></FeaturesBlocks>
        <Newsletter />

      </main>


      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default MallsHome;