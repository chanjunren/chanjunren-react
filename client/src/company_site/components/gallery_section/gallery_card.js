import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.dark,
    // border: `0.1px solid #fff`
  },
  cardMedia: {
  }
}));

const GalleryCard = (props) => {
  const classes = useStyles();

  const { title, cardImg, description, onCardClick } = props;

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
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GalleryCard;
