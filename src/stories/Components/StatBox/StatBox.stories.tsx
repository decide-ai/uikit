import type { Meta, StoryObj } from '@storybook/react';
import { StatBox as StatBoxComponent, Typography, ProgressBar } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/StatBox',
  component: StatBoxComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes,
  args,
} as Meta<typeof StatBoxComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StatBoxWithButtons: Story = {
  args: {
    label: 'Active Balance',
    iconName: 'CardV2Icon',
    primaryBtnText: 'Deposit',
    skin: 'standard',
    primaryBtnOnClick: () => { console.log('primaryBtnOnClick') },
    secondaryBtnText: 'Withdraw',
    secondaryBtnOnClick: () => { console.log('secondaryBtnOnClick') },
    children: [
      <Typography size="6xl" adaptive>468</Typography>
    ]
  }
};

export const StatBoxWithOneButton: Story = {
  args: {
    label: 'Active Balance',
    iconName: 'CardV2Icon',
    skin: 'standard',
    primaryBtnText: 'Withdraw',
    primaryBtnOnClick: () => { console.log('primaryBtnOnClick') },
    children: [
      <Typography size="6xl" adaptive>468</Typography>
    ]
  }
};

export const StatBoxWithProgress: Story = {
  args: {
    label: 'Reputation Score',
    iconName: 'ChartSquareIcon',
    skin: 'standard',
    children: [
      <ProgressBar
        label="Progress"
        progress={70}
        title="ProgressBar Title"
        total={100}
        type="line"
      />
    ]
  }
};

export const StatBoxGrey: Story = {
  args: {
    label: 'Reputation Score',
    iconName: 'ChartSquareIcon',
    skin: 'grey',
    children: [
      <Typography size="4xl" adaptive>468</Typography>
    ]
  }
};