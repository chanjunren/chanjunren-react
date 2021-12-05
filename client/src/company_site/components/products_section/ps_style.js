import { makeStyles } from '@material-ui/core';

const psStyle = makeStyles((theme) => ({
  productRoot: {
    padding: 20,
    minHeight: '100vh',
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
    background: '#FFF',
    maxWidth: '100%',
    // background: theme.palette.primary.light,
    // flexGrow: 1,
  },
  productCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImg: {
    display: 'block',
    alignItems: 'center',
    maxWidth: '200px',
    maxHeight: '400px',
  },
  sectionHeader: {
    padding: '30px'
  },
}));

export default psStyle;
