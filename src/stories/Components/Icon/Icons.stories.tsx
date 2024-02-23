import type { Meta, Story } from '@storybook/react';
import { IconProps } from'../../../../components/Icon/types';
import { argTypes, args } from './docs';
import Icons from './Icons';

export default {
  title: 'Components/Icons',
  component: Icons,
  tags: ['autodocs'],
  argTypes,
  args,
} as Meta;

const Template: Story<IconProps> = (props) => <Icons {...props} />;

export const IconsList = Template.bind({});
IconsList.args = {};
