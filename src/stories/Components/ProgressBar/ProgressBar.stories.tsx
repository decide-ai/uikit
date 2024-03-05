import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes,
  args,
} as Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProgressLine: Story = {
  args: {
    type: 'line',
    title: 'ProgressBar Title',
    label: 'Progress',
    progress: 70,
    total: 100,
  }
};

export const ProgressDash: Story = {
  args: {
    type: 'dash',
    title: 'ProgressBar Title',
    label: 'Progress',
    progress: 7,
    total: 12,
  }
};