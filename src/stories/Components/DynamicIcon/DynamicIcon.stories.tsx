import type { Meta, StoryObj } from '@storybook/react';
import { DynamicIcon as DynamicIconComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/DynamicIcon',
  component: DynamicIconComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof DynamicIconComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DynamicIcon: Story = {
  args: {
    iconName: 'DownloadIcon',
    stroke: '#1B4444'
  }
};