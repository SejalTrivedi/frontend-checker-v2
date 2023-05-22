import React from 'react';
import { Meta, StoryObj, Story } from '@storybook/react';
import { HTMLPreview, HTMLPreviewProps } from './HtmlPreview';

const meta = {
  title: 'Components/Molecules/HTMLPreview',
  component: HTMLPreview,
} satisfies Meta<typeof HTMLPreview>;

export default meta;
// type Story = StoryObj<typeof meta>;

const Template: Story<HTMLPreviewProps> = (args) => (
  <HTMLPreview {...args} />
);

export const SampleHTMLPreview = Template.bind({});
SampleHTMLPreview.args = {
  htmlContent:
    '<h1>Hello, world!</h1><p>This is some HTML content.</p>',
};
