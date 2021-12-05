import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#fff',
    width: '40vh',
    height: '40vh',
    // '&:hover': {
    //   background:'linear-gradient(to right, #11998e, #38ef7d)',
    //   cardTitle: {
    //     color: '#fff'
    //   },
    //   cardDesc: {
    //     color: '#fff'
    //   }
    // }
  },
  cardMedia: {
    objectFit: 'contain',
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  const { title, cardImg, description, onCardClick } = props;
  const onCardTouch = (event) => {
    console.log('IM GETTING TOUCHED')
  }
  return (
    <Card className={classes.root} onClick={onCardClick}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          alt={title}
          height="140"
          image={cardImg}
          title={title}
        />
        <CardContent>
          <Typography className={classes.cardTitle} variant="h5" color="primary" component="h2">
            {title}
          </Typography>
          <Typography className={classes.cardDesc} variant="body2" color="secondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductCard;