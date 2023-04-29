import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Newsletter from '../partials/Newsletter';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Footer from '../partials/Footer';

import FeaturesBg from '../images/features-bg.png';
import Features from '../images/features.png';
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
        firstTitle="Find objects easily" firstText="Ping Path empowers the visually impaired to more easily navigate the world with indoor maps" firstImg={Features} firstAlt="An image describing Ping Path's mission: to Increase Independence for Visually Impaired People with spatial audio and near instant captioning"
        secondTitle="Avoid obstacles with ease" secondText="Utilize path finding algorithms and LiDAR based object detection/positioning to avoid obstacles." secondImg={FeaturesBg} secondAlt="An image of a hand holding an iPhone with an arrow pointing to an object"
        thirdTitle="Doors, people, appliances, and more" thirdText="" thirdImg={Path} thirdAlt="A grid showing how Ping Path's path finding algorithm works, helping people avoid obstacles"/>
        <FeaturesBlocks></FeaturesBlocks>
        <Newsletter />

      </main>


      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;