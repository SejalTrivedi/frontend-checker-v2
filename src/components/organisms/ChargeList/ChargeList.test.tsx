import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import axios from 'axios';
import { CandidateChargeList } from './ChargeList';

jest.mock('axios');

describe('CandidateChargeList', () => {
  test('renders the component and handles checkbox change', async () => {
    const mockData = {
      id: 1,
      candidateId: 1,
      charges: ['Charge 1', 'Charge 2', 'Charge 3'],
    };

    const axiosGetSpy = jest.spyOn(axios, 'get');
    axiosGetSpy.mockResolvedValueOnce({ data: [mockData] });

    const onChangeMock = jest.fn();

    render(
      <CandidateChargeList
        candidateId={1}
        onChange={onChangeMock}
        checkedItems={['Charge 2']}
      />
    );
    await act(async () => {
      // Wait for a brief period before accessing the checkboxes
      setTimeout(() => {
        const charge1Checkbox = screen.getByLabelText('Charge 1');
        const charge2Checkbox = screen.getByLabelText('Charge 2');
        const charge3Checkbox = screen.getByLabelText('Charge 3');

        expect(charge1Checkbox).toBeInTheDocument();
        expect(charge2Checkbox).toBeInTheDocument();
        expect(charge3Checkbox).toBeInTheDocument();
        expect(charge2Checkbox).toBeChecked();

        fireEvent.click(charge1Checkbox);

        expect(onChangeMock).toHaveBeenCalledWith(['Charge 2', 'Charge 1']);
      }, 1000); // Adjust the timeout value as needed
    });
    expect(axiosGetSpy).toHaveBeenCalledWith(
      'http://localhost:3000/charges?candidateId=1'
    );

    axiosGetSpy.mockRestore(); // Restore the original axios.get implementation
  });
});
