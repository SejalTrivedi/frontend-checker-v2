import { Accordion } from '../../atoms/Accordion/Accordion';
import { ContentBodyTitle } from '../../molecules/ContentBodyTitle/ContentBodyTitle';
import { ContentBody } from '../../molecules/ContentBody/ContentBody';
import { Grid, Divider, Stack, Typography, InputLabel, Card, TextField } from '@mui/material';
import { CourtSearchList } from '../../organisms/CourtSearchList/CourtSearchList';
import { CandidateReportDetail } from '../../organisms/CandidateReportDetail/CandidateReportDetail';
import { Button } from '../../atoms/Button/Button';
import { useParams, Link } from 'react-router-dom';
import { CandidateChargeList } from '../../organisms/CargeList/ChargeList';
import './preAdverse.css';
import {
    PersonOutline,
    LocationOn,
    Cake,
    EmailOutlined,
    WestOutlined,
} from '@mui/icons-material';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ActionEmailNotice } from '../../organisms/ActionEmailNotice/ActionEmailNotice';
import { HTMLPreview } from '../../molecules/HtmlPreview/HtmlPreview';
import { Modal } from '../../molecules/Modal/Modal';

type Data = {
  id: number;
  name: string;
  location: string;
  email: string;
  dob: string;
};

export const PreAdverseAction
// : React.FC<PreAdverseActionProps>
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
        rightButtonList={<></>}
        bodyTitle={
          <Link to={`/candidate-detail/${candidate.id}`}>
            <Stack direction="row" spacing={2}>
              <WestOutlined></WestOutlined>
              <Typography>Pre-Adverse Action Notice</Typography>
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
            <Card
            sx={{
                background: '#FFFFFF',
                borderRadius: '6px',
                padding: '12px'
            }}>
                {/* <Typography><span className='mail-labels'>From:</span> <span className='mail-values'>kyle@checkr.com</span></Typography> */}
                <Typography className='mail-labels'>From: </Typography>
                <Typography className='mail-values'>kyle@checkr.com</Typography>
                <Divider></Divider>
                <Typography className='mail-labels'>To: </Typography>
                <Typography className='mail-values'>{data?.email}</Typography>
                <Divider></Divider>
                <Typography className='mail-labels'>Subject: </Typography>
                <Typography className='mail-values'>Pre-adverse action notice - checkr-bpo</Typography>
                <Divider></Divider>
                <Typography className='mail-body-1'>Dear {data?.name}</Typography>
                <Typography className='mail-body-1'>You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.</Typography>
                <CandidateChargeList candidateId={data?.id}></CandidateChargeList>
                <Typography className='mail-body-2'>If you wish to dispute the accuracy of the information in the report directly with the consumer reporting agency (i.e., the source of the informationcontained in the report), you should contact the agency identifield above directly.</Typography>
                <Typography className='mail-body-2'>Sincerely </Typography>
                <Typography className='mail-body-2'>Checkr-bpo |</Typography>
                <Divider></Divider>
                <Grid className='mail-footer'
                    container
                    spacing={10}
                    sx={{
                        borderRadius: '0px',
                        justifyContent: "space-between"
                    }}
                    alignItems="center">
                        <Grid item>
                            <Typography className="text-end">
                                Auto send Post Adverse action
                                <TextField type='number' className='mail-input'
                                    value={props.autoSendEmailAfterDays}
                                ></TextField> Days
                            </Typography>
                        </Grid>
                        <Grid item alignContent="right">
                            
                            <Modal
                            modalButtonName="Submit Notice"
                            modalTitle="Pre-Adverse Action Notice"
                            openButtonName="Preview Notice"
                            modalContent={
                                <HTMLPreview
                                htmlContent={props.emailContent}
                                ></HTMLPreview>
                            }
                            ></Modal>
                        </Grid>
                </Grid>
                {/* <ActionEmailNotice from={'kyle@checkr.com'} to={data ? data.email : ''} subject={'Pre-adverse action notice - checkr-bpo'} emailContent={'You recently authorized checkr-bpo (“the company”) to obtain consumer reports and/or invistigate consumer reportsabout you from a consumer reporting agency. The Company is considering taking action in whole or in past on information in such report(s) including the following specific items identified in the report prepared by Checkr, Inc.'} autoSendEmailAfterDays={7} /> */}
            </Card>
          </Stack>
        }
      ></ContentBody>
    </>
  );
};
