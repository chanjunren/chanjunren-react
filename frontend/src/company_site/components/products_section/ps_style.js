import { makeStyles } from '@material-ui/core';

const psStyle = makeStyles((theme) => ({
  productRoot: {
    padding: 20,
    height: '100vh',
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    // background: theme.palette.primary.light,
    flexGrow: 1,
  },
  productCard: {
    display: 'inline-grid',
    justifyItems: 'center',
    alignItems: 'center',
  },
  productImg: {
    display: 'block',
    alignItems: 'center',
    maxWidth: '200px',
    maxHeight: '400px',
  },
  cardTitle: {},
  cardDescription: {},
  currentItem: {},
  itemTitle: {},
  itemDescription: {},
}));

export default psStyle;
