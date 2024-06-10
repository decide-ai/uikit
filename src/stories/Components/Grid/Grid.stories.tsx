import type { Meta, StoryObj } from '@storybook/react';
import { Grid as GridComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Layout/Grid',
  component: GridComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes,
  args,
} as Meta<typeof GridComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Grid: Story = {
  args: {}
};