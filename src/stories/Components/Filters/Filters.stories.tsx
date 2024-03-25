import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Filters as FiltersComponent, Select, Button } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Filters',
  component: FiltersComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof FiltersComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

const storySelectList = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

export const Filters: Story = {
  args: {
    onSortClick: () => { console.log('sort') },
    sortOnlyMobile: false,
    label: 'Filters:',
    children: [
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
  }
};