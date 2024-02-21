import type { Meta, Story } from '@storybook/react';
import { IconProps } from'../../../../components/Icon/types';
import { argTypes, args } from './docs';
import IconsList from './IconsList';

export default {
  title: 'Components/Icon',
  component: IconsList,
  tags: ['autodocs'],
  argTypes,
  args,
} as Meta;

const Template: Story<IconProps> = (props) => <IconsList {...props} />;

export const Icons = Template.bind({});
Icons.args = {};
