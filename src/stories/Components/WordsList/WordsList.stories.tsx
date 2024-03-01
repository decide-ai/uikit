import type { Meta, StoryObj } from '@storybook/react';
import { WordsList as WordsListComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/WordsList',
  component: WordsListComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof WordsListComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WordsList: Story = {
  args: {
    gridCols: 'cols3',
    wordsList: [
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six'
    ],
  }
};