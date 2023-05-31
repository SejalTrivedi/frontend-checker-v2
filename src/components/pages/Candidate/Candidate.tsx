import {
  Stack,
  Divider,
  Grid,
  OutlinedInput,
  Card,
  Typography,
  InputAdornment,
} from '@mui/material';
import {
  Download,
  PlusOne,
  SearchOutlined,
  MoreVertOutlined,
  FilterListOutlined,
} from '@mui/icons-material';
import { Button } from '../../atoms/Button/Button';
import { Content } from '../../organisms/Content/Content';
import { CandidateList } from '../../organisms/CandidateList/CandidateList';

export function CandidatePage() {
  return (
    <Content
      bodyTitle={<Typography>Candidates</Typography>}
      rightButtonList={
        <Stack direction={'row'} spacing={2}>
          <Button
            children={'Export'}
            variant={'outlined'}
            startIcon={<Download />}
          />
          <Button
            children={'Manual Order'}
            variant={'contained'}
            startIcon={<PlusOne />}
          />
        </Stack>
      }
      contentBox={
        <Card
          sx={{
            background: '#FFFFFF',
            borderRadius: '6px',
          }}
        >
          <Grid
            container
            spacing={1}
            alignItems="center"
            sx={{
              borderRadius: '0px',
              background: '#FFFFFF',
              justifyContent: 'space-between',
              padding: '12px',
            }}
          >
            <Grid item>
              <Typography className="text-end">
                Candidate Information
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    sx={{ height: '36px' }}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchOutlined></SearchOutlined>
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                    placeholder="Search any candidate"
                  />
                </Grid>
                <Grid item>
                  <Button
                    startIcon={
                      <FilterListOutlined></FilterListOutlined>
                    }
                    variant="outlined"
                    children="Filter"
                  ></Button>
                </Grid>
                <Grid item>
                  <Button
                    startIcon={<MoreVertOutlined></MoreVertOutlined>}
                    variant="outlined"
                  ></Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider></Divider>
          <CandidateList></CandidateList>
        </Card>
      }
    ></Content>
  );
}
