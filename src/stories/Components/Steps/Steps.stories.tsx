import type { Meta, StoryObj } from '@storybook/react';
import { Steps as StepsComponent } from '../../../../components';
import { args, argTypes } from './docs';

const meta = {
  title: 'Components/Steps',
  component: StepsComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes,
  args,
} as Meta<typeof StepsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StepsIndex: Story = {
  args: {
    skin: 'dot',
    steps: [{
      label: 'Audio',
      iconName: 'MusicNoteSliderV2Icon',
      state: 'completed',
    }, {
      label: 'Video',
      iconName: 'VideocameraRecordIcon',
      state: 'completed',
    }, {
      label: 'Image',
      iconName: 'PanoramaIcon',
      state: 'active',
    }, {
      label: 'Final',
      iconName: 'CrownMinimalisticIcon',
    }]
  }
};

export const StepsWithIcon: Story = {
  args: {
    skin: 'icon',
    steps: [{
      label: 'Audio',
      iconName: 'MusicNoteSliderV2Icon',
      state: 'completed',
    }, {
      label: 'Video',
      iconName: 'VideocameraRecordIcon',
      state: 'active',
    }, {
      label: 'Image',
      iconName: 'PanoramaIcon',
      state: 'active',
    }, {
      label: 'Final',
      iconName: 'CrownMinimalisticIcon',
    }]
  }
};

export const StepsWithActiveAndCompleted: Story = {
  args: {
    steps: [{
      label: 'Audio',
      iconName: 'MusicNoteSliderV2Icon',
      state: 'completed',
    }, {
      label: 'Video',
      iconName: 'VideocameraRecordIcon',
      state: 'completed',
    }, {
      label: 'Image',
      iconName: 'PanoramaIcon',
      state: 'active',
    }, {
      label: 'Image',
      iconName: 'PanoramaIcon',
    }]
  }
};