import { Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Stack } from '@mui/system';
import { Checkbox } from '../../atoms/CheckBox/CheckBox';
import '../../pages/PreAdverseAction/preAdverse.css';

type Data = {
  id: number;
  candidateId: number;
  charges: string[];
};

type CandidateChargeListProps = {
  candidateId: number | undefined;
  onChange: (checkedItems: string[]) => void;
  checkedItems: string[];
};

export const CandidateChargeList: React.FC<
  CandidateChargeListProps
> = ({ candidateId, onChange, checkedItems }) => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/charges?candidateId=${candidateId}`
      );
      setData(response.data[0]);
    };

    fetchData();
  }, [candidateId]);

  const handleCheckboxChange = (option: string): void => {
    const updatedCheckedItems = checkedItems.includes(option)
      ? checkedItems.filter((item) => item !== option)
      : [...checkedItems, option];

    onChange(updatedCheckedItems); // Call the callback with the updated checkedItems
  };

  return (
    <Stack>
      {data?.charges.map((chargeName) => {
        return (
          <>
            <Stack direction={'row'} key={chargeName}>
              <Checkbox
                checked={checkedItems.includes(chargeName)}
                onChange={() => handleCheckboxChange(chargeName)}
              ></Checkbox>
              <Typography
                sx={{ paddingTop: '8px' }}
                className="mail-body-1"
              >
                {chargeName}
              </Typography>
            </Stack>
          </>
        );
      })}
    </Stack>
  );
};
