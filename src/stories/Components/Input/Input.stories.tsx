import type { Meta, StoryObj } from '@storybook/react';
import { Input as InputComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof InputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
  }
};