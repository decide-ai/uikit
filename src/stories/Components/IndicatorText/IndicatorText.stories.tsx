import type { Meta, StoryObj } from '@storybook/react';
import { IndicatorText as IndicatorTextComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/IndicatorText',
  component: IndicatorTextComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof IndicatorTextComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IndicatorText: Story = {
  args: {
    indicator: 'green',
    textSize: 'sm',
    text: 'The quick brown fox jumps over the lazy dog.',
    textColor: 'A00'
  }
};