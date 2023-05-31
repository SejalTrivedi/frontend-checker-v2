import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render the button with the correct text', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should call the onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should be disabled when the disabled prop is provided', () => {
    const { getByText } = render(<Button disabled>Click me</Button>);
    const buttonElement = getByText('Click me') as HTMLButtonElement;
    expect(buttonElement.disabled).toBe(true);
  });

  it('should have a custom CSS class when className prop is provided', () => {
    const cssClass = 'custom-button';
    const { getByText } = render(
      <Button className={cssClass}>Click me</Button>
    );
    const buttonElement = getByText('Click me');
    expect(buttonElement.classList.contains(cssClass)).toBe(true);
  });
});
