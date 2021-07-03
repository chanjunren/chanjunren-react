import React, {useState} from 'react';

import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import HeroSection from '../components/hero_section';
import InfoSection from '../components/info_section';
import AppsSection from '../components/rs_applications';
import {
  aboutSectionObj,
  contactUsSectionObj,
  gallerySectionObj,
} from '../components/info_section/data';
import Footer from '../components/footer';

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
      <InfoSection {...gallerySectionObj}/>
      <AppsSection/>
      <InfoSection {...contactUsSectionObj}/>
      <Footer/>
    </>
  );
};

export default Home;
