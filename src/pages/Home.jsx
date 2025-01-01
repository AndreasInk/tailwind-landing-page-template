import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Newsletter from '../partials/Newsletter';
import Testimonials from '../partials/Testimonials';
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
        <HeroHome text="Improve navigation for the visually impaired with AI and Spatial Computing"/>
        <FeaturesHome 
        title="PingPath is a powerful tool for people with visual impairments" text="Navigate indoor spaces with spatial audio, LiDAR, and AI" 
        firstTitle="Find and avoid objects easily" firstText="Ping Path empowers the visually impaired to more easily navigate the world with indoor maps" firstImg={Features} firstAlt="An image describing Ping Path's mission: to Increase Independence for people with visual impairments People with spatial audio and near instant captioning"
        secondTitle="Question the world around you" secondText='Ask questions such as: "How much money is on the table?" or "How many calories is in this drink?" or "How can I get to the fridge?"' secondImg={Landing} secondAlt="Screenshots of PingPath showing it count money among other tasks"
        thirdTitle="Ask Siri or PingPath" thirdText="Simply speak to ask your questions and control the app" thirdImg={Siri} thirdAlt="A photo of PingPath working with Siri"/>
        <Testimonials></Testimonials>
        <Newsletter />

      </main>


      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;