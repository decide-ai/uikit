import type { Meta, StoryObj } from '@storybook/react';
import { FeedbackAlert as FeedbackAlertComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/FeedbackAlert',
  component: FeedbackAlertComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof FeedbackAlertComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    skin: 'green',
    title: 'The quick brown fox',
    text: `The quick brown fox, full of curiosity, leaped over a lazy dog that was basking in the warm afternoon sun. 
    Unperturbed by the sudden shadow, the dog merely opened one eye, watched the fox land gracefully, 
    and then drifted back to sleep, dreaming of adventures yet to come.`
  }
};