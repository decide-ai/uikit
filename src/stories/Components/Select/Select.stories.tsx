import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select as SelectComponent } from '../../../../components';
import { args, argTypes } from './docs';

const storySelectList = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const meta = {
  title: 'Components/Select',
  component: SelectComponent,
  decorators: [
    (Story) => (
      <div style={{ height: '250px', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof SelectComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Select: Story = {
  args: {
    placeholder: 'Select provider',
    selectList: storySelectList
  }
};

export const SelectWithDefaultValue: Story = {
  args: {
    defaultValue: { id: 3, name: 'Therese Wunsch' },
    selectList: storySelectList
  }
};

export const SelectWithLabel: Story = {
  args: {
    placeholder: 'Select name',
    label: 'Select you favorite name',
    selectList: storySelectList
  }
};

export const SelectWithLabelDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Select name',
    label: 'Select you favorite name',
    selectList: storySelectList
  }
};