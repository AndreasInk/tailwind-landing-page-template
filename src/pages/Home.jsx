import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Newsletter from '../partials/Newsletter';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Footer from '../partials/Footer';

import FeaturesBg from '../images/features-bg.png';
import Shapes from '../images/shapes.png';
import Path from '../images/path.png';
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
        title="Ping Path is a powerful tool for visually impaired people" text="Navigate indoor spaces with spatial audio, LiDAR, and AI" 
        firstTitle="Find objects easily" firstText="Ping Path empowers the visually impaired to more easily navigate the world with indoor maps" firstImg={FeaturesBg}
        secondTitle="Avoid obstacles with ease" secondText="Utilize path finding algorithms and LiDAR based object detection/positioning to avoid obstacles." secondImg={Shapes}
        thirdTitle="Doors, people, appliances, and more" thirdText="" thirdImg={Path}/>
        <FeaturesBlocks></FeaturesBlocks>
        <Newsletter />

      </main>


      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;