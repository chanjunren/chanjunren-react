import { makeStyles } from "@material-ui/core";

const psStyle = makeStyles((theme) => ({
  root: {
    padding: 20,
    height: '100vh',
    background: theme.palette.primary.light,
    display: 'flex',
    alignItems: 'center'
  },
  productCard: {
    display: 'inline-grid',
    justifyItems: 'center'
  },
  productImg: {
    height: "40vh"
  },
  cardTitle: {},
  cardDescription: {},
  swiperSlide: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    maxWidth: '300px',
    maxHeight: '500px'
  },
}));

export default psStyle;
