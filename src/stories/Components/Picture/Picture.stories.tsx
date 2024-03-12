import type { Meta, StoryObj } from '@storybook/react';
import { Picture as PictureComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Picture',
  component: PictureComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof PictureComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PictureSrc: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
    alt: 'picture_src',
    title: 'Picture src',
    loading: 'lazy'
  }
};

export const PictureSource: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    srcSet: [
      'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 435w', 
      'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 735w', 
      'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 870w', 
      'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1035w',
      'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1335w'
    ],
    alt: 'picture_srcset',
    title: 'Picture srcset',
    loading: 'eager',
  }
};