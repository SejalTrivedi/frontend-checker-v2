import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Image } from './Image';
import generalImage from '../../../../public/assets/generalImage.png';
export default {
  title: 'Components/Atoms/Image',
  component: Image,
  argTypes: {
    source: {
      control: { type: 'select' },
      options: [generalImage],
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Image>;

const Template: StoryFn<typeof Image> = (args: any) => (
  <Image {...args} />
);

export const SampleGeneralImage = Template.bind({});
SampleGeneralImage.args = {
  source: generalImage,
  width: '720px',
  height: '768px',
};
