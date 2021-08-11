import { makeStyles } from '@material-ui/styles';

const useContactStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  mapContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
  },
  infoContainer: {
    display: 'grid',
    alignContent: 'center',
  },
  infoHeader: {
    fontStyle: 'italic',
  },
  infoBody: {
    fontStyle: 'italic',
    marginBottom: '10px',
  },
}));

export default useContactStyles;
