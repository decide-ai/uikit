import type { Meta, StoryObj } from '@storybook/react';
import { PreviewCard as PreviewCardComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/PreviewCard',
  component: PreviewCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof PreviewCardComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PreviewCard: Story = {
  args: {
    picture: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
    dateTime: '31 Jan 2024',
    label: 'You will have 5 minutes to vote',
    status: 'standard'
  }
};