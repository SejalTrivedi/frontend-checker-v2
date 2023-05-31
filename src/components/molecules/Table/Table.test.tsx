import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Table } from './Table';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

describe('Table', () => {
  const dataRows = [
    {
      id: 1,
      name: 'John Smith',
      status: 'Clear',
      adjudication: null,
      location: 'Barrouallie',
      date: '2/22/2022',
      email: 'John@gmail.com',
      dob: '2/22/2022',
    },
    {
      id: 2,
      name: 'Serene',
      status: 'Clear',
      adjudication: null,
      location: 'Vänersborg',
      date: '3/31/2022',
      email: 'Serene@gmail.com',
      dob: '3/31/2022',
    },
  ];
  const sequenceColumn = [
    'Name',
    'Adjudication',
    'Status',
    'Location',
    'Date',
  ];
  const handleRowClick = jest.fn();
  it('renders Table from API call', async () => {
    render(
      <Router>
        <Table dataRows={dataRows} sequenceColumn={sequenceColumn} />
      </Router>
    );
    await waitFor(() => {
      expect(screen.getByText('Serene')).toBeInTheDocument();
    });
    
  });

  it('navigates to candidate detail page on row click', () => {

    render(
      <MemoryRouter>
        <Table
          dataRows={dataRows}
          sequenceColumn={sequenceColumn}
          handleRowClick={handleRowClick}
        />
      </MemoryRouter>
    );

    const nameCell = screen.getByText('John Smith');
    fireEvent.click(nameCell);

    expect(handleRowClick).toHaveBeenCalled();
    expect(handleRowClick.mock.calls[0][0]).toEqual(1);

  });
  
});