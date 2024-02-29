import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIcon } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    iconName: 'CopyIcon',
    skin: 'standard',
    size: 24,
  }
};

export const Grey: Story = {
  args: {
    iconName: 'CopyIcon',
    skin: 'grey',
    size: 24,
  }
};

export const Linear: Story = {
  args: {
    iconName: 'CopyIcon',
    skin: 'linear',
    size: 24,
  }
};
