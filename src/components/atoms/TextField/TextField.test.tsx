import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField Component', () => {
  it('accepts input correctly', () => {
    const labelText = 'Username';
    const inputValue = 'JohnDoe';
    render(<TextField label={labelText} />);
    const inputElement = screen.getByLabelText(
      labelText
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();

    // Simulate user input
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(inputElement.value).toBe(inputValue);
  });
});
