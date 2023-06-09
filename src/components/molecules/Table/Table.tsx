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

import { Link } from 'react-router-dom';

export interface TableProps extends MuiTableProps {
  dataRows: any[];
  sequenceColumn: string[];
  handleRowClick?: (rowId: number) => void;
}

export const Table: React.FC<TableProps> = ({
  dataRows,
  handleRowClick,
  ...props
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const getStatusValueColor = (value: string) => {
    return value == 'Clear' ? 'status-clear' : 'status-consider';
  };
  const getAdjudicationValueColor = (value: string) => {
    return value == 'Adverse Action'
      ? 'status-consider'
      : 'status-clear';
  };
  
  
  const handleRowClickInternal = (rowId: number) => {
    if (handleRowClick) {
      handleRowClick(rowId);
    }
  };


  return (
    <MuiTable {...props}>
      <TableHead
        sx={{
          background: '#E5E7ED',
        }}
      >
        <TableRow>
          {props.sequenceColumn.map((cellTitle) => {
            return <TableCell key={cellTitle}>{cellTitle}</TableCell>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {dataRows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((data) => {
            return (
              <TableRow key={data['id']}>
                <TableCell key={data['name']}>
                  <Link to={`/candidate-detail/${data.id}`}>
                    {data['name']}
                  </Link>
                </TableCell>
                <TableCell key={data.adjudication}>
                  {data.adjudication ? (
                    <Chip
                      className={getAdjudicationValueColor(
                        data.adjudication
                      )}
                      label={data.adjudication}
                    />
                  ) : (
                    '-'
                  )}
                </TableCell>
                <TableCell key={data.status}>
                  {data.status ? (
                    <Chip
                      className={getStatusValueColor(data.status)}
                      label={data.status}
                    />
                  ) : (
                    '-'
                  )}
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
              rowsPerPageOptions={[5, 10, 25, 100]}
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
