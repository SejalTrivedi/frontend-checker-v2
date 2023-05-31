import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('should render the avatar with the correct image source', () => {
    const imageSrc =
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
    const { getByAltText } = render(<Avatar src={imageSrc} />);
    const avatarImage = getByAltText('Avatar') as HTMLImageElement;
    expect(avatarImage.getAttribute('src')).toContain(imageSrc);
  });

  it('should render the avatar with the correct alt text', () => {
    const altText = 'User Avatar';
    const { getByAltText } = render(<Avatar alt={altText} />);
    const avatarImage = getByAltText('User Avatar');
    expect(avatarImage).toBeInTheDocument();
  });

  it('should render the avatar with a default fallback image', () => {
    const { getByAltText } = render(<Avatar />);
    const avatarImage = getByAltText('Avatar') as HTMLImageElement;
    expect(avatarImage.getAttribute('src')).toContain(
      'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
    );
  });

  it('should render the avatar with custom CSS classes', () => {
    const cssClasses = 'avatar small';
    const { container } = render(<Avatar className={cssClasses} />);
    const avatarElement = container.firstChild as HTMLElement;
    expect(avatarElement.classList.contains('avatar')).toBe(true);
    expect(avatarElement.classList.contains('small')).toBe(true);
  });
});
