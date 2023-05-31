import React from 'react';
import { render, screen } from '@testing-library/react';
import { HTMLPreview } from './HtmlPreview';
import { Typography } from '@mui/material';

describe('HtmlPreview', () => {
  it('should render the HtmlPreview with the correct element', () => {
    const htmlContent = <p>Html Preview</p>;
    render(<HTMLPreview htmlContent="<p>Html Preview</p>" />);
    const htmlPreviewElement = screen.getByText('Html Preview');
    expect(htmlPreviewElement).toBeInTheDocument();
  });
});
