import { makeStyles } from '@material-ui/styles';
export const AppSectionStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: '20px',
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
  },
  header: {
    padding: '30px',
  },
  appsContainer: {

  }
}));

export const AppCardStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', //16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#fff',
    height: '70px',
    width: '70px',
    padding: '15px',
    objectFit: 'contain',
  },
}));
