import type { Meta, StoryObj } from '@storybook/react';
import { Stub as StubComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Stub',
  component: StubComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof StubComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Stub: Story = {
  args: {
    title: 'Brown fox and lazy dog',
    subTitle: 'The quick brown fox, full of curiosity, leaped over a lazy dog that was basking in the warm afternoon sun.',
    iconName: 'CheckCircleIcon'
  }
};