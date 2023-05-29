import { ContentBodyTitle } from '../../molecules/ContentBodyTitle/ContentBodyTitle';
import { ContentBody } from '../../molecules/ContentBody/ContentBody';
import {
  Grid,
  Divider,
  Stack,
  Typography,
  Card,
  TextField,
} from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { CandidateChargeList } from '../../organisms/ChargeList/ChargeList';
import './preAdverse.css';
import { WestOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HTMLPreview } from '../../molecules/HtmlPreview/HtmlPreview';
import { EmailPreviewNoticeModal } from '../../organisms/EmailPreviewNoticeModal/EmailPreviewNoticeModal';
import { EmailNoticeTemplate } from '../../templates/EmailNoticeTemplate/EmailNoticeTemplate';

type Data = {
  id: number;
  name: string;
  location: string;
  email: string;
  dob: string;
};

export const PreAdverseAction = ({ ...props }) => {
  const candidate = useParams();
  const [data, setData] = useState<Data | null>(null);
  const attachments = ['Summary of right under the FCRA', 'Copy of background report'];
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/candidate?id=${candidate.id}`
      );
      setData(response.data[0]);
    };

    fetchData();
  }, [props.candidateId]);

  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const handleCheckboxChange = (
    updatedCheckedItems: string[]
  ): void => {
    setCheckedItems(updatedCheckedItems);
  };
  return (
    <>
      <ContentBodyTitle
        rightButtonList={<></>}
        bodyTitle={
          <Link
            to={`/candidate-detail/${candidate.id}`}
            className="candidate-link"
          >
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
                padding: '12px',
              }}
            >
              <EmailNoticeTemplate
                candidateName={data?.name}
                candidateEmail={data?.email}
                regularPreviewFlag={true}
                candidateCharges={
                  <CandidateChargeList
                    checkedItems={checkedItems}
                    onChange={handleCheckboxChange}
                    candidateId={data?.id}
                  />
                }
              ></EmailNoticeTemplate>
              <Divider></Divider>
              <Grid
                className="mail-footer"
                container
                spacing={10}
                sx={{
                  borderRadius: '0px',
                  justifyContent: 'space-between',
                }}
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    className="text-end"
                    sx={{
                      marginTop: '25px',
                      justifyContent: 'center',
                    }}
                  >
                    Auto send Post Adverse action{' '}
                    <TextField
                      type="number"
                      className="mail-input"
                      value={props.autoSendEmailAfterDays || 7}
                      size="small"
                      sx={{
                        marginLeft: '5px',
                        marginRight: '5px',
                      }}
                    ></TextField>{' '}
                    Days
                  </Typography>
                </Grid>
                <Grid item alignContent="right">
                  <EmailPreviewNoticeModal
                    modalSubmitButtonName="Submit Notice"
                    modalTitle="Pre-Adverse Action Notice"
                    openButtonName="Preview Notice"
                    candidateData={data}
                    modalContent={
                      <EmailNoticeTemplate
                        candidateName={data?.name}
                        candidateEmail={data?.email}
                        selectedCharges={checkedItems}
                        regularPreviewFlag={false}
                        attachments={attachments}
                      ></EmailNoticeTemplate>
                    }
                  ></EmailPreviewNoticeModal>
                </Grid>
              </Grid>
            </Card>
          </Stack>
        }
      ></ContentBody>
    </>
  );
};
