import React from 'react';
import {
  Card,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material';
import { Image } from '../../atoms/Image/Image';
import generalImage from '../../../../public/assets/generalImage.png';
import { TextField } from '../../atoms/TextField/TextField';
import { Button } from '../../atoms/Button/Button';
import { GitHub, Google } from '@mui/icons-material';
export type LoginProps = {};

export const Login = ({ ...props }: LoginProps) => {
  return (
    <Stack
      direction={'row'}
      sx={{ height: '100vh', overflow: 'hidden' }}
    >
      <Grid
        {...props}
        container
        spacing={10}
        sx={{
          borderRadius: '0px',
          justifyContent: 'space-around',
        }}
        alignItems="center"
      >
        <Grid item>
          <Image source={generalImage} height="372px" width="380px" />
        </Grid>
        <Grid
          item
          sx={{
            background: '#FFFFFF',
            boxShadow: '0px 4px 28px rgba(45, 45, 47, 0.1)',
            borderRadius: '6px',
            padding: '32px',
            paddingLeft: '32px !important',
            paddingTop: '32px !important',
          }}
        >
          <Card
            sx={{
              borderRadius: '6px',
              boxShadow: 'none',
            }}
          >
            <div>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#2C2C2E',
                }}
              >
                Sign In
              </Typography>
            </div>
            <div>
              <Typography
                sx={{
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '20px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                }}
              >
                Please enter your login credentials
              </Typography>
            </div>
            <FormControl variant="standard">
              <Stack sx={{ marginTop: '10px' }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{
                    position: 'unset',
                    padding: '4px 0 5px !important',
                  }}
                >
                  Email
                </InputLabel>
                <TextField></TextField>
              </Stack>
              <Stack sx={{ marginTop: '10px' }}>
                <InputLabel
                  shrink
                  htmlFor="bootstrap-input"
                  sx={{
                    position: 'unset',
                    padding: '4px 0 5px !important',
                  }}
                >
                  Password
                </InputLabel>
                <TextField type="password"></TextField>
              </Stack>
              <Stack sx={{ marginTop: '10px' }}>
                <Button
                  children="Sign In"
                  variant="contained"
                  type="submit"
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px 16px',
                    gap: '4px',
                    width: '100%',
                  }}
                />
              </Stack>
              <Stack sx={{ marginTop: '10px' }}>
                <Button
                  children="Sign In with Google"
                  variant="outlined"
                  startIcon={<Google />}
                  sx={{ width: '100%' }}
                ></Button>
              </Stack>
              <Stack sx={{ marginTop: '10px' }}>
                <Button
                  children="Sign In with GIT"
                  variant="outlined"
                  startIcon={<GitHub />}
                  sx={{ width: '100%' }}
                ></Button>
              </Stack>
            </FormControl>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};
