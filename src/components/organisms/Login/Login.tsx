import React from 'react';
import {
  Card,
  Stack,
  Typography,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Image } from '../../atoms/Image/Image';
import generalImage from '../../../../public/assets/generalImage.png';
import { TextField } from '../../atoms/TextField/TextField';
import { Button } from '../../atoms/Button/Button';
import { GitHub, Google } from '@mui/icons-material';
export type LoginProps = {};

export const Login = ({ ...props }: LoginProps) => {
  return (
    <Card {...props}>
      <Stack direction={'row'}>
        <Card>
          <Image source={generalImage} height="372px" width="380px" />
        </Card>
        <Card
          sx={{
            height: '672px',
            width: '480px',
            left: '741px',
            top: '48px',
            borderRadius: '6px',
            boxShadow: '0px 4px 28px 0px #2D2D2F1A',
          }}
        >
          {' '}
          <div>
            <Typography
              sx={{
                background: '#2C2C2E',
                // position: 'absolute',
                // width: '65px',
                // height: '30px',
                // left: '48px',
                // top: '54px',
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
            <div>
              <InputLabel shrink htmlFor="bootstrap-input">
                Email
              </InputLabel>
              <TextField></TextField>
            </div>
            <div>
              <InputLabel shrink htmlFor="bootstrap-input">
                Password
              </InputLabel>
              <TextField type="password"></TextField>
            </div>
            <div>
              <Button
                children="Sign In"
                variant="contained"
                type="submit"
              />
            </div>
            <div>
              <Button
                children="Sign In with Google"
                variant="outlined"
                startIcon={<Google />}
              ></Button>
            </div>
            <div>
              <Button
                children="Sign In with GIT"
                variant="outlined"
                startIcon={<GitHub />}
              ></Button>
            </div>
          </FormControl>
        </Card>
      </Stack>
    </Card>
  );
};
