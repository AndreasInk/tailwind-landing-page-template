import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Newsletter from '../partials/Newsletter';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Footer from '../partials/Footer';

import FeaturesBg from '../images/features-bg.png';
import Maps from '../images/maps.png';
import Shapes from '../images/shapes.png';
function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome text="Augmenting Reality, Amplifying Intelligence to Create a More Accessible World"/>
        <FeaturesHome 
        title="Ping Path is a powerful tool for schools" text="Power accessability for visually impaired, empower first year students, and streamline emergency response" 
        firstTitle="Power Accessability" firstText="Ping Path empowers the visually impaired to more easily navigate the world with indoor maps" firstImg={FeaturesBg}
        secondTitle="Enhancing In-Store Analytics" secondText="With AR experiences, your business can more gather foot traffic statistics to maximize profit." secondImg={Maps}
        thirdTitle="AR Experiences that Captivate" thirdText="Build exciting expereiences for your customers that drive profits" thirdImg={Shapes}/>
        <FeaturesBlocks></FeaturesBlocks>
        <Newsletter />

      </main>


      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;