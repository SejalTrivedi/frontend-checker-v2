import React from 'react';
import axios from 'axios';
import { number } from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from '@mui/material';

export class CourtSearchList extends React.Component {
  state = {
    courtSearches: [],
    candidateId: number,
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:3000/candidate_court_searches?candidateId=${this.state.candidateId}`
      )
      .then((res) => {
        const courtSearches = res.data;
        this.setState({ courtSearches });
      });
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            {['Search', 'Status', 'Date'].map((columnTitle) => {
              return <TableCell>{columnTitle}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.courtSearches.map((searchData) => {
            return (
              <TableRow>
                <TableCell>{searchData}</TableCell>
                <TableCell>{searchData}</TableCell>
                <TableCell>{searchData}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}
