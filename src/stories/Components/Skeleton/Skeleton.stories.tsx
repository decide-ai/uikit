import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton as SkeletonComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Skeleton',
  component: SkeletonComponent,
  decorators: (Story) => (
    <div 
      className='flex flex-col gap-2 h-[100px] w-[350px]'
    >
      <Story />
    </div>
  ),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof SkeletonComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SkeletonCount: Story = {
  args: {
    count: 3
  }
};

export const SkeletonWidthPercentAndHeightPixels: Story = {
  args: {
    width: '60%',
    height: '20px'
  }
};

export const SkeletonWidthAndHeightPixels: Story = {
  args: {
    width: '120px',
    height: '10px'
  }
};