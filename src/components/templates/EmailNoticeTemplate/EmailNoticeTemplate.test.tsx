import React from 'react';
import { render } from '@testing-library/react';
import { EmailNoticeTemplate } from './EmailNoticeTemplate';

jest.mock('axios'); // Mock axios for API call

describe('EmailNoticeTemplate', () => {
  it('renders EmailNoticeTemplate from API call', async () => {
    const { getByText } = render(
      <EmailNoticeTemplate regularPreviewFlag={true} />
    );
    const nameElement = getByText('kyle@checkr.com');
    expect(nameElement).toBeInTheDocument();
  });
});
