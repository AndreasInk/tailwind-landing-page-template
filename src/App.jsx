import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import MallsHome from './pages/MallsHome';
import CampusesHome from './pages/CampusesHome';
import Home from './pages/Home';
import NotFound from './partials/NotFound';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/malls" element={<MallsHome />} />
        <Route exact path="/campuses" element={<CampusesHome />} />
        <Route exact path="/stores" element={<MallsHome />} />
        <Route path="/building" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
