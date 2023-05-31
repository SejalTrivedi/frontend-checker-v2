import React from 'react';
import { render } from '@testing-library/react';
import { Image } from './Image';

describe('Image', () => {
  it('should render the image with the correct source', () => {
    const imageSrc =
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
    const { getByAltText } = render(
      <Image source={imageSrc} alt="Test Image" />
    );
    const imgElement = getByAltText('Test Image');
    expect(imgElement).toHaveAttribute('src', imageSrc);
  });

  it('should render the image with the correct alt text', () => {
    const altText = 'Test Image';
    const { getByAltText } = render(
      <Image
        source="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
        alt={altText}
      />
    );
    const imgElement = getByAltText('Test Image');
    expect(imgElement).toBeInTheDocument();
  });
});
