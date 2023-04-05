import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Newsletter from '../partials/Newsletter';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Footer from '../partials/Footer';

import FeaturesBg from '../images/features-bg.png';
import Nav from '../images/nav.png';
import map3D from '../images/map3D.png';

function CampusesHome() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */} 
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome text="Commit to Diversity and Inclusion on Campus"/>
        <FeaturesHome 
        title="Ping Path is a powerful tool for schools" text="Power accessability for visually impaired, empower first year students, and streamline emergency response" 
        firstTitle="Power Accessability" firstText="Ping Path empowers the visually impaired to more easily navigate the world with indoor maps" firstImg={FeaturesBg}
        secondTitle="Empower First Year Students" secondText="Help new students navigate to their classes during the first few weeks on campus, creating a smoother transition and more enjoyable experience as they acclimate to their new environment." secondImg={Nav}
        thirdTitle="Streamline Emergency Response" thirdText="In the event of an emergency, Ping Path's spatial data can guide first responders to navigate the campus more efficiently, ensuring faster response times and potentially saving lives." thirdImg={map3D}/>
        <FeaturesBlocks></FeaturesBlocks>
        <Newsletter />

      </main>


      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default CampusesHome;