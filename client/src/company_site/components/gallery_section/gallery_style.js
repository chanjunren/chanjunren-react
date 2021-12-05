import { makeStyles } from '@material-ui/core/styles';

const GalleryStyles = makeStyles((theme) => ({
  galleryContainer: {
    background: '#FFF',
    minHeight: '100vh',
    width: '100%',
    display: 'grid',
    alignContent: 'center',
    justifyItems: 'center'
  },
  cardContainer: {
    padding: '30px',
  },
  sectionHeader: {
    padding: '30px'
  },
  // galleryButton: {},
  // heading: {
  //   marginBottom: '24px',
  //   fontWeight: '600',
  // },
  // subtitle: {
  //   marginBottom: '35px',
  //   fontSize: '18px',
  // },
}));

export default GalleryStyles;
