import { makeStyles } from '@material-ui/core/styles';
import AboutBackground from '../../images/about_section/about_bg.jpg';

const AboutSectionStyles = makeStyles((theme) => ({
  aboutContainer: {
    padding: '24px',
    background: '#000',
  },
  cardContainer: {
    padding: '24px',
    height: 'fit-content',
  },
  imageContainer: {
    padding: '4.5em',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${AboutBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '24px',
    minHeight: 'inherit'
  },
  textContainer: {
    height: '100%',
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '4.5em',
  },
  header: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subHeader: {
    fontWeight: 'bold',
  }
}));

export default AboutSectionStyles;
