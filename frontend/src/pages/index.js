import React, {useState} from 'react';

import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import HeroSection from '../components/hero_section';
import InfoSection from '../components/info_section';
import {aboutSectionObj} from '../components/info_section/data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...aboutSectionObj}/>
    </>
  );
};

export default Home;
