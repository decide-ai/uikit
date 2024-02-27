import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../../../../components';
import { TypographyProps } from '../../../../components/Typography/types';
import { args, argTypes } from './docs';

export default {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof Typography>;

export const Story: StoryObj<typeof Typography> = {
};
