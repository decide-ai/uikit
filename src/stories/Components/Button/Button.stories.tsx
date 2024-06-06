import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    size: 'medium',
    skin: 'standard',
    buttonText: 'Button text'
  }
};

export const Rounded: Story = {
  args: {
    size: 'medium',
    skin: 'standard',
    buttonText: 'Button text'
  }
};

export const Inline: Story = {
  args: {
    size: 'medium',
    skin: 'inline',
    buttonText: 'Button text'
  }
};

export const Grey: Story = {
  args: {
    size: 'medium',
    skin: 'grey',
    buttonText: 'Button text'
  }
};

export const InlineGrey: Story = {
  args: {
    size: 'medium',
    skin: 'inlineGrey',
    buttonText: 'Button text'
  }
};

export const Light: Story = {
  args: {
    size: 'medium',
    skin: 'light',
    buttonText: 'Button text'
  }
};