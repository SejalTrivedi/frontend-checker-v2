import { Grid, Box, Stack, Typography, Paper } from '@mui/material';
import {
  GavelOutlined,
  DateRangeOutlined,
  QueryBuilderOutlined,
  Inventory2Outlined,
} from '@mui/icons-material';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

type Data = {
  id: string;
  candidateId: string;
  status: string;
  adjudication: string;
  package: string;
  created_at: string;
};

type CandidateReportProps = {
  candidateId: number | undefined;
};

export const CandidateReportDetail: React.FC<
  CandidateReportProps
> = ({ ...props }) => {
  const candidate = useParams();
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/report?candidateId=${candidate.id}`
      );
      setData(response.data[0]);
    };

    fetchData();
  }, [props.candidateId]);
  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            className="candidate-info"
          >
            <Grid item>
              <Paper className="candidate-Paper">
                <Stack direction="row" spacing={1}>
                  <Box className="candidate-Box">
                    <QueryBuilderOutlined className="unset-Icon-Style" />
                  </Box>
                  <Stack>
                    <div className="candidate-text">
                      <Stack>
                        <Typography>Status</Typography>
                      </Stack>
                      <Stack>
                        <Typography>{data?.status}</Typography>
                      </Stack>
                    </div>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className="candidate-Paper">
                <Stack direction="row" spacing={1}>
                  <Box className="candidate-Box">
                    <GavelOutlined className="unset-Icon-Style" />
                  </Box>
                  <Stack>
                    <div className="candidate-text">
                      <Stack>
                        <Typography>Adjudication</Typography>
                      </Stack>
                      <Stack>
                        <Typography>{data?.adjudication}</Typography>
                      </Stack>
                    </div>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className="candidate-Paper">
                <Stack direction="row" spacing={1}>
                  <Box className="candidate-Box">
                    <Inventory2Outlined className="unset-Icon-Style" />
                  </Box>
                  <Stack>
                    <div className="candidate-text">
                      <Stack>
                        <Typography>Package</Typography>
                      </Stack>
                      <Stack>
                        <Typography>{data?.package}</Typography>
                      </Stack>
                    </div>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className="candidate-Paper">
                <Stack direction="row" spacing={1}>
                  <Box className="candidate-Box">
                    <DateRangeOutlined className="unset-Icon-Style" />
                  </Box>
                  <Stack>
                    <div className="candidate-text">
                      <Stack>
                        <Typography>Created At</Typography>
                      </Stack>
                      <Stack>
                        <Typography>{data?.created_at}</Typography>
                      </Stack>
                    </div>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
