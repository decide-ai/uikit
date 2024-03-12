import type { Meta, StoryObj } from '@storybook/react';
import { Timer as TimerComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Timer',
  component: TimerComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof TimerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Timer: Story = {
  args: {
    durationMinutes: 5,
    deadline: 2,
    position: 'start',
    callback: () => {
      console.log('hello timer!');
    }
  }
};