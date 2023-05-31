import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('Link Component', () => {
  it('renders the link text', () => {
    const linkText = 'Home';
    render(<Link href="/" displayValue={linkText} />);
    const linkElement = screen.getByText(linkText);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders the correct href attribute', () => {
    const linkUrl = '/about';
    render(<Link href={linkUrl} displayValue={'About'} />);
    const linkElement = screen.getByText('About');
    expect(linkElement).toHaveAttribute('href', linkUrl);
  });

  it('applies additional props correctly', () => {
    const linkText = 'Contact';
    const target = '_blank';
    const rel = 'noopener noreferrer';
    render(
      <Link
        href="/contact"
        target={target}
        rel={rel}
        displayValue={linkText}
      />
    );
    const linkElement = screen.getByText(linkText);
    expect(linkElement).toHaveAttribute('target', target);
    expect(linkElement).toHaveAttribute('rel', rel);
  });
});
