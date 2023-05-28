import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Box, Typography } from '@mui/material';

const style = {
  width: '696px',
  height: '424px',
  background: '#FFFFFF',
  borderRadius: '6px',
};

type PreAdverseActionData = {
  id: number;
  candidateId: number;
  selected_charges: string[];
};

type CandidateData = {
  adjudication: string;
};

type AddCandidateActionEmailNoticeProps = {
  candidateId: number | undefined;
};

export const AddEmailNotice: React.FC<
  AddCandidateActionEmailNoticeProps
> = ({ ...props }) => {
  const [name, setName] = useState('');
  // other state variables if needed

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setName(event.target.value);
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    const newPreAdverseActionData: PreAdverseActionData = {
      id: 2, // or any specific ID you want to update
      selected_charges: ['test data'],
      candidateId: 1,
      // other properties
    };

    axios
      .post(
        `http://localhost:3000/pre_adverse_action/`,
        newPreAdverseActionData
      )
      .then((response) => {
        // Handle successful response
        console.log('Data added successfully:', response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error while updating data:', error);
      });

    const updatedCandidateData: CandidateData = {
      adjudication: 'Consider',
    };

    axios
      .put(
        `http://localhost:3000/candidate/${props.candidateId}`,
        updatedCandidateData
      )
      .then((response) => {
        // Handle successful response
        console.log('Data updated successfully:', response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error while updating data:', error);
      });
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Pre-Advance Action notice successfully sent
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
