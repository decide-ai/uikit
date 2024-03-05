import type { Meta, StoryObj } from '@storybook/react';
import { Drawer as DrawerComponent, Typography } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Drawer',
  component: DrawerComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes,
  args,
} as Meta<typeof DrawerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Drawer: Story = {
  args: {}
};