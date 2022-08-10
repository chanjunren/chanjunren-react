import { makeStyles } from '@material-ui/styles';

export const useContactStyles = makeStyles((theme) => ({
  root: {
    padding: '24px',
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
  },
  mapContainer: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    padding: '30px',
  },
}));

export const useContactCardStyles = makeStyles((theme) => ({
  infoContainer: {
    display: 'grid',
    alignContent: 'center',
    width: 'inherit',
    textAlign: 'center',
    justifyContent: 'center'
  },
  headerBlock: {
    display: 'flex',
    marginTop: '20px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoHeader: {
    marginLeft: '10px',
  },
  countryHeader: {
    fontStyle: 'italic'
  },
  infoBody: {
    maxWidth: '300px'
  },
}));