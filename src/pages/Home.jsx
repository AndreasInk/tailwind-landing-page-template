import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Newsletter from '../partials/Newsletter';
import Testimonials from '../partials/Testimonials';
import ProductFAQ from '../partials/ProductFAQ';
import Footer from '../partials/Footer';

import Landing from '../images/hero-image.png';
import Features from '../images/features.png';
import Siri from '../images/Siri+PingPath.png';
function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome text="PingPath by Andreas Ink is an iOS app for blind and visually impaired people. Explore indoor surroundings with spatial audio, AI captions, voice questions, and LiDAR."/>
        <FeaturesHome 
        title="Explore indoor spaces with PingPath" text="Hear spatial audio cues, describe your surroundings, and ask questions about what is around you."
        firstTitle="Find objects with experimental pathfinding" firstText="PingPath uses spatial audio, LiDAR, and AI to help locate objects and explore indoor spaces. Pathfinding is experimental and requires someone to assist with navigation." firstImg={Features} firstAlt="PingPath spatial audio and captioning feature illustration"
        secondTitle="Question the world around you" secondText='Use AI captions and voice questions to describe your surroundings, such as asking what is on a table.' secondImg={Landing} secondAlt="Screenshots of PingPath showing questions about nearby objects"
        thirdTitle="Ask Siri or PingPath" thirdText="Simply speak to ask your questions and control the app" thirdImg={Siri} thirdAlt="A photo of PingPath working with Siri"/>
        <ProductFAQ />
        <Testimonials></Testimonials>
        <Newsletter />

      </main>


      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;
