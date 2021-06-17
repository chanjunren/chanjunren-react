import React, {useState} from 'react';

import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle}/>
    </>
  );
};

export default Home;
