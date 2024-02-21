import type { Meta, StoryObj, Story } from '@storybook/react';
import { IconProps } from'../../../../components/Icon/types';
import * as IconComponent from '../../../../components/Icon';
import { argTypes, args } from './docs';
import IconsMap from './IconsMap'

export default {
  title: 'Components/Icon',
  component: IconsMap,
  tags: ['autodocs'],
  argTypes,
  args,
} as Meta;

const Template: Story<IconProps> = (props) => <IconsMap {...props} />;

export const Icons = Template.bind({});
Icons.args = {};
