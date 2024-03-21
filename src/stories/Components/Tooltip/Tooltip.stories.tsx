import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip as TooltipComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes,
  args,
} as Meta<typeof TooltipComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tooltip: Story = {
  args: {
    size: 'small',
    text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual.'
  }
};