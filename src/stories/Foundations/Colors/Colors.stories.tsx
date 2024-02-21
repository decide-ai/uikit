import type { Meta, Story } from '@storybook/react';
import ColorsPalette from './ColorsPalette';

export default {
  title: 'Foundations/Colors',
  component: ColorsPalette,
  tags: ['autodocs'],
} as Meta;

const Template: Story = () => <ColorsPalette />;

export const Colors = Template.bind({});
Colors.args = {};
