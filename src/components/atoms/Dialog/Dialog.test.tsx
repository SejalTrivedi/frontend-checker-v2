import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Dialog } from './Dialog';

describe('Dialog', () => {
  it('should render the dialog with the correct title', () => {
    const titleText = 'Dialog Title';
    const { getByText } = render(
      <Dialog children={titleText} open={true} />
    );
    const titleElement = getByText(titleText) as HTMLInputElement;
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the dialog with the correct content', () => {
    const contentText = 'Dialog Content';
    const { getByText } = render(
      <Dialog open={true}>{contentText}</Dialog>
    );
    const contentElement = getByText(contentText);
    expect(contentElement).toBeInTheDocument();
  });
});
