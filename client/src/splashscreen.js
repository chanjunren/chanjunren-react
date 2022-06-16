import React from 'react';
import Lottie from 'react-lottie';
import RsAppLogo from './company_site/images/rsLogo.png';

import animationData from './resources/splashscreen.json';
import { withTheme } from './util/theme';
import { makeStyles } from '@material-ui/core/styles';

const SplashStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative',
    margin: 'auto',
    background: '#000'
  },
  logo: {
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '96px',
    height: '38px',
  }, 
  anim: {
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
}));

const SplashScreen = (props) => {
  const splashClasses = SplashStyles();
  const {onSplashScreenEndHandler} = props;
  const onAnimCompleteListener = () => {
    onSplashScreenEndHandler();
  }
  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return <div className={splashClasses.root}>
    <img className={splashClasses.logo} id="rs-splash-logo" src={RsAppLogo} alt='Robosolutiosn Logo' />
    <Lottie 
      className={splashClasses.anim}
      options={defaultOptions}
      height={250}
      width={250}
      isClickToPauseDisabled={true}
      eventListeners={[
        {
          eventName: 'complete',
          callback: onAnimCompleteListener
        }
      ]}/>
  </div>
}

export default withTheme(SplashScreen);
