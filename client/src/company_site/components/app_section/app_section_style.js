import { makeStyles } from '@material-ui/styles';
export const AppSectionStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: '32px',
    display: 'grid',
    alignItems: 'center',
  },
  header: {
    fontStyle: 'italic',
    fontSize: '2rem',
    textAlign: 'center',
  },
}));

export const AppCardStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
