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
  status: string;
  adjudication: string;
};

export const CandidateDetail = ({ ...props }) => {
  const candidate = useParams();
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/candidate?id=${candidate.id}`
        );
        setData(response.data[0]);
        // Handle the success case
      } catch (error) {
        // Handle the error case
      }
    }
    fetchData()
      .then((response) => {
        // Handle the success case
      })
      .catch((error) => {
        // Handle the error case
      });
  }, [props.candidateId]);

  const engageCandidate = () => {
    async function fetchData() {
      try {
        if (data) {
          data['adjudication'] = 'Engaged';
          await axios.put(
            `http://localhost:3000/candidate/${data.id}`,
            data
          );
        }
        // Handle the success case
      } catch (error) {
        // Handle the error case
      }
    }
    fetchData()
      .then(() => {
        // Handle the successful resolution
        window.location.href = '/candidates';
      })
      .catch((error) => {
        // Handle the error
        console.log(error);
      });
  };

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
            <Button
              children={'Engage'}
              variant={'contained'}
              onClick={engageCandidate}
            />
          </Stack>
        }
        bodyTitle={
          <Link to="/candidates" className="candidate-link">
            <Stack direction="row" spacing={2}>
              <WestOutlined></WestOutlined>
              <Typography>{data?.name}</Typography>
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
              children="Candidate Information"
              accordionDetails={
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
                                <PersonOutline className="unset-Icon-Style" />
                              </Box>
                              <Stack>
                                <div className="candidate-text">
                                  <Stack>
                                    <Typography>Name</Typography>
                                  </Stack>
                                  <Stack>
                                    <Typography>
                                      {data?.name}
                                    </Typography>
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
                                <EmailOutlined className="unset-Icon-Style" />
                              </Box>
                              <Stack>
                                <div className="candidate-text">
                                  <Stack>
                                    <Typography>Email</Typography>
                                  </Stack>
                                  <Stack>
                                    <Typography>
                                      {data?.email}
                                    </Typography>
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
                                <LocationOn className="unset-Icon-Style" />
                              </Box>
                              <Stack>
                                <div className="candidate-text">
                                  <Stack>
                                    <Typography>Location</Typography>
                                  </Stack>
                                  <Stack>
                                    <Typography>
                                      {data?.location}
                                    </Typography>
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
                                <Cake className="unset-Icon-Style" />
                              </Box>
                              <Stack>
                                <div className="candidate-text">
                                  <Stack>
                                    <Typography>DOB</Typography>
                                  </Stack>
                                  <Stack>
                                    <Typography>
                                      {data?.dob}
                                    </Typography>
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
              }
            ></Accordion>
            <Accordion
              children="Report Information"
              accordionDetails={
                <CandidateReportDetail
                  candidateId={data?.id}
                ></CandidateReportDetail>
              }
            ></Accordion>
            <Accordion
              expanded={true}
              children="Court Searches"
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
