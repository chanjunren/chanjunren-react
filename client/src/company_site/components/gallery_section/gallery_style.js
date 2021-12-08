import { makeStyles } from '@material-ui/core/styles';

const GalleryStyles = makeStyles((theme) => ({
  galleryContainer: {
    background: '#FFF',
    // minHeight: '100vh',
    width: '100%',
    display: 'grid',
    padding: '24px',
    alignContent: 'center',
    justifyItems: 'center'
  },
  cardContainer: {
    padding: '30px',
  },
  sectionHeader: {
    padding: '30px'
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    padding: '24px',
    borderWidth: '1px',
    borderRadius: '10px',
    borderStyle: 'solid',
    borderColor: 'rgba(17, 17, 17, 0.12)'
  }
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
