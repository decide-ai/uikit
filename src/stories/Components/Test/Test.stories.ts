import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Test from './Test';

const meta: Meta<typeof Test> = {
  title: 'Components/Test',
  component: Test,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() }
};

export default meta;

type Story = StoryObj<typeof Test>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};