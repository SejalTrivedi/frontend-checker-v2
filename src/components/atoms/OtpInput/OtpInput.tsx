import React from 'react';
import {
  MuiOtpInput as OTPInput,
  MuiOtpInputProps as OTPInputProps,
} from 'mui-one-time-password-input';

export interface MuiOtpInputProps extends OTPInputProps {
  length: number;
}

export const MuiOtpInput: React.FC<MuiOtpInputProps> = ({
  ...props
}) => {
  return <OTPInput {...props}></OTPInput>;
};
