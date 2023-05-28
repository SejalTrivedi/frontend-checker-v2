import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Typography,
  Chip,
} from '@mui/material';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type Data = {
  id: number;
  candidateId: string;
  court_searches: {
    search_name: string;
    status: string;
    date: string;
  }[];
};

type CourtSearchProps = {
  candidateId: number | undefined;
};

export const CourtSearchList: React.FC<CourtSearchProps> = ({
  ...props
}) => {
  const candidate = useParams();
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/candidate_court_searches?candidateId=${candidate.id}`
      );
      setData(response.data[0]);
    };

    fetchData();
  }, [props.candidateId]);
  
  const getStatusValueColor = (value: string) => {
    return value == 'Clear' ? 'status-clear' : 'status-consider';
  };
  return (
    <Table>
      <TableHead
        sx={{
          background: '#E5E7ED',
        }}
      >
        <TableRow>
          {['Search', 'Status', 'Date'].map((columnTitle) => {
            return <TableCell>{columnTitle}</TableCell>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.court_searches.map((searchData) => {
          return (
            <TableRow>
              <TableCell>
                <Typography color={'#224DFF'}>
                  {searchData.search_name}
                </Typography>
              </TableCell>
              <TableCell>
                  {searchData.status ? (
                    <Chip
                      className={getStatusValueColor(searchData.status)}
                      label={searchData.status}
                    />
                  ) : (
                    '-'
                  )}
              </TableCell>
              <TableCell>
                <Typography>{searchData.date}</Typography>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
