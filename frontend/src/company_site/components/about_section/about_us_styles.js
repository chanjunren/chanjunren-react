import { makeStyles } from '@material-ui/core/styles';
// import AboutBackground from '../../images/about_section/about_bg.jpg';

const AboutSectionStyles = makeStyles((theme) => ({
  // aboutContainer: {
  //   height: '100vh',
  //   padding: '32px',
  //   overflow: 'hidden',
  //   // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${AboutBackground})`,
  // },
  bodyText: {
    textAlign: 'center',
    fontSize: '1.6rem',
    padding: '20px',
  },
  bodyContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoBg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    background: '#232a34',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    textAlign: 'center',
    marginTop: '10px',
    fontStyle: 'italic',
    color: theme.palette.secondary.main,
  },
  aboutContent: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    padding: '8px 24px',
    zIndex: '3',
    overflow: 'scroll'
  },
}));

export default AboutSectionStyles;
