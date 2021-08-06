import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded';
import { BASE_ADDRESS } from '../../../util/values';

const useStyles = makeStyles((theme) => ({
}));

const AppCard = (props) => {
  const classes = useStyles();
  const {title, id, showDeleteModal} = props;
  const deleteEndpoint = `${BASE_ADDRESS}/api/apps/${id}`;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton color="secondary" aria-label="add an alarm">
          <DeleteIcon onClick={() => showDeleteModal(deleteEndpoint)}/>
        </IconButton>
        <IconButton aria-label="add an alarm">
          <AndroidRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AppCard;
