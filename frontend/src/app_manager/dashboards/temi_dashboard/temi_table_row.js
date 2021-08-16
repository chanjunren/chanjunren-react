import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { BASE_ADDRESS } from '../../../util/values';

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
    color: theme.palette.error.main
  }
}));

const TemiRow = (props) => {
  const { owner, serialNumber, id, applications, appMap, showDeleteModal } =
    props;

  const deleteEndpoint = `${BASE_ADDRESS}/api/temis/${id}`;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {owner}
        </TableCell>
        <TableCell>{serialNumber}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <div className={classes.applicationsRoot}>
                {applications.map((application) => {
                  let appLabel = appMap[application];
                  return (
                    <Chip key={appLabel} color="primary" label={appLabel} />
                  );
                })}
              </div>
              <div className={classes.controlPanel}>
                <Button disabled color="primary">Edit</Button>
                <Button
                  color="secondary"
                  className={classes.deleteButton}
                  onClick={() => showDeleteModal(deleteEndpoint)}
                >
                  Delete
                </Button>
              </div>
              {/* <Chips/> */}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default TemiRow;
