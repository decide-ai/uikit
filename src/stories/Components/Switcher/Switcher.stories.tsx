import type { Meta, StoryObj } from '@storybook/react';
import { Switcher } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Switcher',
  component: Switcher,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof Switcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    size: 'medium',
  }
};

export const Small: Story = {
  args: {
    size: 'small',

  }
};

export const MediumChacked: Story = {
  args: {
    initialChecked: true,
    size: 'medium',
  }
};

export const SmallChacked: Story = {
  args: {
    initialChecked: true,
    size: 'small',

  }
};

export const ViewOnly: Story = {
  args: {
    initialChecked: true,
    size: 'small',
    viewOnly: true,
  }
};

export const MediumDisabled: Story = {
  args: {
    disabled: true,
    size: 'medium',
  }
};

export const SmallDisabled: Story = {
  args: {
    disabled: true,
    size: 'small',

  }
};