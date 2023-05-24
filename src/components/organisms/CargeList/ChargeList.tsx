import { Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Stack } from '@mui/system';
import { Checkbox } from '../../atoms/CheckBox/CheckBox';
type Data = {
  id: number;
  candidateId: number;
  charges: string[];
};

type CandidateChargeListProps = {
  candidateId: number | undefined;
};

export const CandidateChargeList: React.FC<
  CandidateChargeListProps
> = ({ ...props }) => {
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/charges?candidateId=${props.candidateId}`
      );
      setData(response.data[0]);
    };

    fetchData();
  }, [props.candidateId]);
  return (
    <Stack>
      {data?.charges.map((chargeName) => {
        return (
          <>
            <Stack direction={'row'}>
              <Checkbox></Checkbox>
              <Typography>{chargeName}</Typography>
            </Stack>
          </>
        );
      })}
    </Stack>
  );
};
