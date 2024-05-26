import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox as CheckboxComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
    },
  },
  argTypes,
  args,
} as Meta<typeof CheckboxComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Drawer: Story = {
  args: {}
};