import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import UserRow from './user_table_row';

const UserTable = (props) => {
  const {users} = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Role</TableCell>
            <TableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            console.log(user);
            return <UserRow {...user}/>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
