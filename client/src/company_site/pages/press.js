import React, {useState} from 'react';

import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import Footer from '../components/footer';
import PressSection from '../components/press_section';
import BlogSection from '../components/blog_section';
import { withTheme } from '../../util/theme';


const Press = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <NavBar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <div style={{height: "80px"}}/>
      <BlogSection/>
      <PressSection/>
      <Footer/>
    </React.Fragment>
  );
};

export default withTheme(Press);
