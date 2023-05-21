import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import { Box } from '@mui/system';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const meta = {
  title: 'Components/Atoms/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const SampleModal = Template.bind({});
SampleModal.args = {
  open: true,
  component: (
    <Box sx={{ ...style, width: 200 }}>
      <h2 id="child-modal-title">Text in a child modal</h2>
      <p id="child-modal-description">
        Hello there, welcome to thw world.
      </p>
    </Box>
  ),
};
