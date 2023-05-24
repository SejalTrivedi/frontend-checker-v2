import { Accordion } from '../../atoms/Accordion/Accordion';
import { ContentBodyTitle } from '../../molecules/ContentBodyTitle/ContentBodyTitle';
import { ContentBody } from '../../molecules/ContentBody/ContentBody';
import { Grid, Paper, Stack, Typography, Box } from '@mui/material';
import { CourtSearchList } from '../../organisms/CourtSearchList/CourtSearchList';
import { CandidateReportDetail } from '../../organisms/CandidateReportDetail/CandidateReportDetail';
import { Button } from '../../atoms/Button/Button';
import { useParams, Link } from 'react-router-dom';
import './candidateDetail.css';
import {
  PersonOutline,
  LocationOn,
  Cake,
  EmailOutlined,
  WestOutlined,
} from '@mui/icons-material';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Data = {
  id: number;
  name: string;
  location: string;
  email: string;
  dob: string;
};

type CandidateDetailProps = {
  candidateId: number;
  candidateName: string;
};
export const CandidateDetail
// : React.FC<CandidateDetailProps>
= ({
  ...props
}) => {
  const candidate = useParams();
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/candidate?id=${candidate.id}`
      );
      setData(response.data[0]);
    };

    fetchData();
  }, [props.candidateId]);
  return (
    <>
      <ContentBodyTitle
        rightButtonList={
          <Stack direction={'row'} spacing={2}>
            <Link to={`/pre-adverse-action/${candidate.id}`}>
                <Button
                children={'Pre-Adverse Action'}
                variant={'outlined'}
                />
            </Link>
            <Button children={'Engage'} variant={'contained'} />
          </Stack>
        }
        bodyTitle={
          <Link to="/candidates">
            <Stack direction="row" spacing={2}>
              <WestOutlined></WestOutlined>
              <Typography>{props.candidateName}</Typography>
            </Stack>
          </Link>
        }
      ></ContentBodyTitle>
      <ContentBody
        contentBox={
          <Stack
            spacing={'20px'}
            sx={{
              border: '0px',
              backgroundColor: '#f7f8fa',
            }}
          >
            <Accordion
              title="Candidate Information"
              accordionDetails={
                <>
                  <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                    <Grid item xs={12}>
                      <Grid
                        container
                        justifyContent="center"
                        spacing={2}
                      >
                        <Grid item>
                          <Paper className="candidate-Paper">
                            <Stack direction="row" spacing={1}>
                              <Box className="candidate-Box">
                                <PersonOutline className="unset-Icon-Style" />
                              </Box>
                              <Stack>
                                <Stack>
                                  <Typography>Name</Typography>
                                </Stack>
                                <Stack>
                                  <Typography>
                                    {data?.name}
                                  </Typography>
                                </Stack>
                              </Stack>
                            </Stack>
                          </Paper>
                        </Grid>
                        <Grid item>
                          <Paper className="candidate-Paper">
                            <Stack direction="row" spacing={1}>
                              <Box className="candidate-Box">
                                <EmailOutlined className="unset-Icon-Style" />
                              </Box>
                              <Stack>
                                <Stack>
                                  <Typography>Email</Typography>
                                </Stack>
                                <Stack>
                                  <Typography>
                                    {data?.email}
                                  </Typography>
                                </Stack>
                              </Stack>
                            </Stack>
                          </Paper>
                        </Grid>
                        <Grid item>
                          <Paper className="candidate-Paper">
                            <Stack direction="row" spacing={1}>
                              <Box className="candidate-Box">
                                <LocationOn className="unset-Icon-Style" />
                              </Box>
                              <Stack>
                                <Stack>
                                  <Typography>Location</Typography>
                                </Stack>
                                <Stack>
                                  <Typography>
                                    {data?.location}
                                  </Typography>
                                </Stack>
                              </Stack>
                            </Stack>
                          </Paper>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        justifyContent="center"
                        spacing={2}
                      >
                        <Grid item>
                          <Paper className="candidate-Paper">
                            <Stack direction="row" spacing={1}>
                              <Box className="candidate-Box">
                                <Cake className="unset-Icon-Style" />
                              </Box>
                              <Stack>
                                <Stack>
                                  <Typography>DOB</Typography>
                                </Stack>
                                <Stack>
                                  <Typography>{data?.dob}</Typography>
                                </Stack>
                              </Stack>
                            </Stack>
                          </Paper>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              }
            ></Accordion>
            <Accordion
              title="Report Information"
              accordionDetails={
                <CandidateReportDetail
                  candidateId={data?.id}
                ></CandidateReportDetail>
              }
            ></Accordion>
            <Accordion
              title="Court Searches"
              accordionDetails={
                <CourtSearchList
                  candidateId={data?.id}
                ></CourtSearchList>
              }
            ></Accordion>
          </Stack>
        }
      ></ContentBody>
    </>
  );
};
