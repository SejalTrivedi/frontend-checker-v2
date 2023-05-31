import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserAvatarMolecule } from './UserAvatar';

describe('User Avatar', () => {
  it('should render the User Avatar with the correct element', () => {
    const userName = 'Ronak';
    const userAvatarSrc =
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
    render(
      <UserAvatarMolecule
        userName={userName}
        userAvatarSrc={userAvatarSrc}
      />
    );
    const userAvatarElement = screen.getByText('Ronak');
    expect(userAvatarElement).toBeInTheDocument();
  });
});
