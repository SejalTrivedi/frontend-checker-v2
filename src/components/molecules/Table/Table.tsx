import React from 'react';
import {
  Table as MuiTable,
  TableProps as MuiTableProps,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Chip,
  TableFooter,
} from '@mui/material';

import { demoTableStoryRows } from '../../data/data';
import { Button } from '../../atoms/Button/Button';

export interface TableProps extends MuiTableProps {
  dataRows: {
    name: string;
    adjudication: string;
    status: string;
    date: string;
    location: string;
  }[];
}

export const Table: React.FC<TableProps> = ({
  dataRows = demoTableStoryRows,
  ...props
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <MuiTable {...props}>
      <TableHead
        sx={{
          background: '#E5E7ED',
        }}
      >
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Adjudication</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Location</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dataRows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((data) => {
            return (
              <TableRow>
                <TableCell key={data.name}>
                  <Button href="#text-buttons">{data.name}</Button>
                </TableCell>
                <TableCell key={data.adjudication}>
                  {data.adjudication}
                </TableCell>
                <TableCell key={data.status}>
                  <Chip color="primary" label={data.status} />
                </TableCell>
                <TableCell key={data.date}>{data.date}</TableCell>
                <TableCell key={data.location}>
                  {data.location}
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={dataRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableCell>
        </TableRow>
      </TableFooter>
    </MuiTable>
  );
};
