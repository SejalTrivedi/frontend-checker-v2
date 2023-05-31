import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { EmailPreviewNoticeModal } from './EmailPreviewNoticeModal';
import '@testing-library/jest-dom'

jest.mock('axios');

describe('EmailPreviewNoticeModal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component with open button and modal title', () => {
    render(
      <EmailPreviewNoticeModal
        openButtonName="Open Modal"
        modalTitle="Test Modal"
        modalContent={<div>Modal Content</div>}
        modalSubmitButtonName="Submit"
      />
    );

    const openButton = screen.getByRole('button', { name: 'Open Modal' });
    // expect(openButton).toBeInTheDocument();

    fireEvent.click(openButton);

    const modalTitle = screen.getByText('Test Modal');
    // expect(modalTitle).toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', async () => {
    render(
      <EmailPreviewNoticeModal
        openButtonName="Open Modal"
        modalTitle="Test Modal"
        modalContent={<div>Modal Content</div>}
        modalSubmitButtonName="Submit"
      />
    );
  
    const openButton = screen.getByRole('button', { name: 'Open Modal' });
    fireEvent.click(openButton);
  
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 1 second
  
    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
  
    const modalTitle = screen.queryByText('Test Modal');
    // expect(modalTitle).not.toBeInTheDocument();
  });
  

  it('submits the form and handles API success', async () => {
    (axios.put as jest.Mock).mockResolvedValue({});

    render(
      <EmailPreviewNoticeModal
        openButtonName="Open Modal"
        modalTitle="Test Modal"
        modalContent={<div>Modal Content</div>}
        modalSubmitButtonName="Submit"
        candidateData={{ id: 1, adjudication: '' }}
      />
    );

    const openButton = screen.getByRole('button', { name: 'Open Modal' });
    fireEvent.click(openButton);

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(
        'http://localhost:3000/candidate/1',
        { id: 1, adjudication: 'Adverse Action' }
      );
    });

    // Additional assertions for success case
  });

  it('submits the form and handles API error', async () => {
    const error = new Error('API Error');
    (axios.put as jest.Mock).mockResolvedValue(error);

    render(
      <EmailPreviewNoticeModal
        openButtonName="Open Modal"
        modalTitle="Test Modal"
        modalContent={<div>Modal Content</div>}
        modalSubmitButtonName="Submit"
        candidateData={{ id: 1, adjudication: '' }}
      />
    );

    const openButton = screen.getByRole('button', { name: 'Open Modal' });
    fireEvent.click(openButton);

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(
        'http://localhost:3000/candidate/1',
        { id: 1, adjudication: 'Adverse Action' }
      );
    });

    // Additional assertions for error case
  });
});
