import { makeStyles } from '@material-ui/core/styles';

const AuthStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.primary,
  },
  header: {
    height: '30vh',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    height: '70vh',
    display: 'grid',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '100px',
    width: '100px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundPosition: 'center 40%',
  },
  textField: {
    width: '100%',
    marginTop: '20px',
  },
  controlPanel: {
    marginTop: '20px',
    display: 'grid  ',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export default AuthStyles;
