import React, { useState } from 'react';
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
}));

const UserRow = (props) => {
  const { id, role, username } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  return (
    <TableRow className={classes.root}>
      <TableCell component="th" scope="row">
        {username}
      </TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>
        <div className={classes.controlPanel}>
          <Button color="primary">Edit</Button>
          <Button color="secondary">Delete</Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
