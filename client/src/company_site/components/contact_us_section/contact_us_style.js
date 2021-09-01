import { makeStyles } from '@material-ui/styles';

const useContactStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    padding: '50px',
  },
  mapContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
  },
  infoContainer: {
    display: 'grid',
    alignContent: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
  headerBlock: {
    display: 'flex',
    marginTop: '20px',
    alignItems: 'center',
  },
  infoHeader: {
    marginLeft: '10px',
  },
  infoBody: {},
}));

export default useContactStyles;
