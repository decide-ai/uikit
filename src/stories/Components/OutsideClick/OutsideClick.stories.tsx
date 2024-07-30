import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Typography, Button, OutsideClick } from '../../../../components';

export default {
  title: 'Components/OutsideClick',
  component: OutsideClick,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      control: false,
    },
  },
  args: {
    children: (
      <div className='flex flex-col gap-2 border-[1px] border-F100 p-10 rounded-lg'>
        <Typography size="base">Click outside me to close</Typography>
        <Button>Click me</Button>
      </div>
    )
  }
} as Meta<typeof OutsideClick>;

const Template: StoryFn<typeof OutsideClick> = (args) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleOutsideClick = () => {
    setIsVisible(false);
    args.onClick();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {isVisible && (
        <OutsideClick {...args} onClick={handleOutsideClick} />
      )}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
