import type { Meta, StoryObj } from '@storybook/react';
import { Spinner as SpinnerComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof SpinnerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    size: 'medium',
    skin: 'standard',
  }
};

export const Grey: Story = {
  args: {
    size: 'medium',
    skin: 'grey',
  }
};

export const Green: Story = {
  args: {
    size: 'medium',
    skin: 'green',
  }
};