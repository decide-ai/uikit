import type { Meta, StoryObj } from '@storybook/react';
import { IconText } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/IconText',
  component: IconText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof IconText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    iconName: 'ChartSquareIcon',
    textSize: 'sm',
    text: 'The quick brown fox jumps over the lazy dog.',
    iconStroke: '#1B4444',
    textColor: 'A00'
  }
};