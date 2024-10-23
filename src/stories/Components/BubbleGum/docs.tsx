import React from 'react';
import { Typography } from '../../../../components';

export const argTypes = {
  skin: {
    control: 'select',
    options: ['inline' , 'grey' , 'light' , 'dark', 'lavender'],
    table: {
      defaultValue: { summary: 'grey' }
    }
  }
}

export const args = {
  skin: 'grey',
  children: [
    <Typography size="base">Hover over me</Typography>
  ]
};