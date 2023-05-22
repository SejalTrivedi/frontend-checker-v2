import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import { Box, Typography } from '@mui/material';

const meta = {
  title: 'Components/Molecules/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const SampleModal = Template.bind({});
SampleModal.args = {
  modalButtonName: 'Save me',
  modalTitle: 'Sample Modal',
  openButtonName: 'Open Modal',
  modalContent: (
    <Box>
      <Typography gutterBottom>
        Cras mattis consectetur purus sit amet fermentum. Cras justo
        odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
        risus, porta ac consectetur ac, vestibulum at eros.
      </Typography>
      <Typography gutterBottom>
        Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et. Vivamus sagittis lacus vel augue laoreet
        rutrum faucibus dolor auctor.
      </Typography>
      <Typography gutterBottom>
        Aenean lacinia bibendum nulla sed consectetur. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et.
        Donec sed odio dui. Donec ullamcorper nulla non metus auctor
        fringilla.
      </Typography>
    </Box>
  ),
};
