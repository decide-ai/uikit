import type { Meta, StoryObj } from '@storybook/react';
import { SideBar as SideBarComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/SideBar',
  component: SideBarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes,
  args,
} as Meta<typeof SideBarComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SideBar: Story = {
  args: {
    beforeDeviderList: [{
      iconName: 'HomeIcon',
      text: 'Profile page'
    }, {
      iconName: 'WidgetV4Icon',
      text: 'Task moderation'
    }, {
      iconName: 'SirenRoundedIcon',
      text: 'Human verification'
    }],
    afterDeviderList: [{
      iconName: 'BellIcon',
      text: 'Invite a Moderator'
    }],
    extraList: [{
      iconName: 'QuestionCircleIcon',
      text: 'How to?'
    }, {
      iconName: 'SendSquareIcon',
      text: 'Logout'
    }]
  }
};