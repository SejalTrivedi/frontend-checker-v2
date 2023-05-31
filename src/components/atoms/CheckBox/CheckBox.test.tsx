import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Checkbox } from './CheckBox';

describe('Checkbox component', () => {
  it('should render with default props', () => {
    render(<Checkbox />);
    const checkbox = screen.getByLabelText('Check me') as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);
  });

  it('should render with custom label', () => {
    render(<Checkbox label="Custom label" />);
    const checkbox = screen.getByLabelText('Custom label') as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);
  });

  it('should toggle checked state on click', () => {
    render(<Checkbox />);
    const checkbox = screen.getByLabelText('Check me') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked)?.toBe(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });
});
