import type { Meta, StoryObj } from '@storybook/react';
import { BubbleGum as BubbleGumComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/BubbleGum',
  component: BubbleGumComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes,
  args,
} as Meta<typeof BubbleGumComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BubbleGumInline: Story = {
  args: {
    skin: 'inline',
    text: 'Bubble Gum'
  }
};

export const BubbleGumGrey: Story = {
  args: {
    skin: 'grey',
    text: 'Bubble Gum'
  }
};

export const BubbleGumLight: Story = {
  args: {
    skin: 'light',
    text: 'Bubble Gum'
  }
};

export const BubbleGumDark: Story = {
  args: {
    skin: 'dark',
    text: 'Bubble Gum'
  }
};