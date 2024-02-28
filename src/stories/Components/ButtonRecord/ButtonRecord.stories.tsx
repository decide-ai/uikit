import type { Meta, StoryObj } from '@storybook/react';
import { ButtonRecord } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/ButtonRecord',
  component: ButtonRecord,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof ButtonRecord>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Photo: Story = {
  args: {
    textColor: 'A00',
    label: 'Click to take a photo',
    type: 'photo',
    active: false,
    disabled: false,
  }
};

export const Record: Story = {
  args: {
    timer: '00:00',
    textColor: 'A00',
    label: 'Click play to start record',
    type: 'record',
    active: false,
    disabled: false,
  }
};