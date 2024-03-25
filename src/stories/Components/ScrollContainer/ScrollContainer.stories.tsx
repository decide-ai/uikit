import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollContainer as ScrollContainerComponent, Select, Button } from '../../../../components';
import { args, argTypes } from './docs';

const storySelectList = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

const scrollContainerChildren = [
  <Button
    buttonText="Button text"
    indicator="grey"
    size="medium"
    skin="light"
  />,
  <Button
    buttonText="Button text"
    indicator="grey"
    size="medium"
    skin="light"
  />,
  <Select 
    placeholder='Select name'
    selectList={storySelectList} 
  />,
  <Select 
    placeholder='Select second name'
    selectList={storySelectList} 
  />,
  <Button
    buttonText="Button text"
    size="medium"
    skin="light"
  />,
  <Button
    buttonText="Button text"
    size="medium"
    skin="light"
  />
]

const meta = {
  title: 'Components/ScrollContainer',
  component: ScrollContainerComponent,
  decorators: (Story) => (
    <div style={{ maxWidth: '450px' }}>
      <Story>
        {...scrollContainerChildren}
      </Story>
    </div>
  ),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof ScrollContainerComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollContainer: Story = {
  args: {
    children: scrollContainerChildren,
  }
};