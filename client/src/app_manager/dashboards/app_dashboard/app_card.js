import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  deleteIcon: {
  }
}));

const AppCard = (props) => {
  const classes = useStyles();
  const { title, id, showDeleteModal } = props;
  const deleteEndpoint = `${process.env.REACT_APP_BACKEND_URL}/api/apps/${id}`;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          className={classes.deleteIcon}
          onClick={() => showDeleteModal(deleteEndpoint)}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AppCard;
