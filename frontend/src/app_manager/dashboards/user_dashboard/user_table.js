import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import UserRow from './user_table_row';

const UserTable = (props) => {
  const { users } = props;
  const [page, setPage] = React.useState(0);
  const [usersPerPage, setUsersPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setUsersPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Role</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.slice(page * usersPerPage, page * usersPerPage + usersPerPage).map((user) => {
              return <UserRow key={user.id} {...user}/>
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={users.length}
        rowsPerPage={usersPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UserTable;
