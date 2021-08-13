import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AccessoryImage from '../../images/products/steami_product.png';
import TemiRobotImage from '../../images/products/temi_robot_product.jpg';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 350,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const products = [
  {
    url: TemiRobotImage,
    title: 'Temi Robot',
    width: '34%',
  },
  {
    url: AccessoryImage,
    title: 'Accessories',
    width: '33%',
  },
  {
    url: TemiRobotImage,
    title: 'Tray Return System',
    width: '33%',
  },
];

export default function ProductButtons(props) {
  const classes = useStyles();
  const {openProductModal} = props;


  return (
    <div className={classes.root}>
      {products.map((product, index) => {
        return (
          <ButtonBase
            focusRipple
            onClick={() => openProductModal(index)}
            key={product.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: product.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${product.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {product.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        );
      })}
    </div>
  );
}
