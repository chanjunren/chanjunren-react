import { makeStyles } from '@material-ui/styles';

const useContactStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    padding: '50px'
  },
  mapContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
  },
  infoContainer: {
    display: 'grid',
    alignContent: 'center',
    justifyContent: 'center'
  },
  headerBlock: {
    display: 'flex',
    marginTop: '20px',
  },
  infoHeader: {
    marginLeft: '10px',
  },
  infoBody: {
  },
}));

export default useContactStyles;
