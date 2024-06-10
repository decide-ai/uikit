import React from 'react';
import { Button } from '../../../../components';

export const argTypes = {
  skin: {
    control: 'select',
    options: [
      'green', 'yellow', 'red', 'grey', 'darkGreen', 'black',
    ],
    table: {
      defaultValue: {
        summary: 'green',
      }
    }
  }
}

export const args = {
  children: [
    <Button
      buttonText="Button text"
      iconName="ArrowRightIcon"
      onClick={() => {}}
      size="medium"
      skin="inline"
    />,
  ]
};