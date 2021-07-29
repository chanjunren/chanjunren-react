import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Row from './table_row';

const TemiCollapsibleTable = (props) => {
  const {units} = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell/>
            <TableCell>Owner</TableCell>
            <TableCell>Serial Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {units.map((unit) => {
            console.log(unit);
            return <Row {...unit}/>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TemiCollapsibleTable;
