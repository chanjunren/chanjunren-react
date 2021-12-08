import { makeStyles } from '@material-ui/core';

const psStyle = makeStyles((theme) => ({
  productRoot: {
    padding: '20px',
    // minHeight: '100vh',
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
    background: '#FFF',
    maxWidth: '100%',
    // background: theme.palette.primary.light,
    // flexGrow: 1,
  },
  sectionHeader: {
    padding: '30px'
  },
}));

export default psStyle;
