import React from 'react';
import axios from 'axios';
import { Table } from '../../molecules/Table/Table';

export class CandidateList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/candidate/`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <Table
        dataRows={this.state.persons}
        sequenceColumn={[
          'Name',
          'Adjudication',
          'Status',
          'Location',
          'Date',
        ]}
      ></Table>
    );
  }
}
