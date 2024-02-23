import type { Meta, Story } from '@storybook/react';
// import { Typography as TypographyStory } from '../../../../components';
import TypographyStory from './TypographyStory';
import { args, argTypes } from './docs';

export default {
  title: 'Components/Typography',
  component: TypographyStory,
  tags: ['autodocs'],
  argTypes,
  args,
} as Meta;

const Template: Story<typeof TypographyStory> = (props) => <TypographyStory {...props} />;

export const Typography = Template.bind({});
Typography.args = {};
