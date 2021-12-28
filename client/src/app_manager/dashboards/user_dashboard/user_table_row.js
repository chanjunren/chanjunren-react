import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

const useRowStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  applicationsRoot: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  controlPanel: {
    float: 'right',
    padding: '0.2rem',
  },
  deleteButton: {
  },
}));

const UserRow = (props) => {
  const { id, role, username, showDeleteModal } = props;
  const deleteEndpoint = `${process.env.REACT_APP_BACKEND_URL}/api/users/${id}`;
  const classes = useRowStyles();
  return (
    <TableRow className={classes.root}>
      <TableCell component="th" scope="row">
        {username}
      </TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>
        <div className={classes.controlPanel}>
          <Button disabled>Edit</Button>
          <Button
            className={classes.deleteButton}
            onClick={() => showDeleteModal(deleteEndpoint)}
          >
            Delete
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
