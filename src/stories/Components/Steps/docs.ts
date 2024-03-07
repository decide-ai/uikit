export const argTypes = {
  skin: {
    control: 'select',
    option: ['num', 'dot', 'icon'],
    table: {
      defaultValue: { summary: 'num' }
    }
  },
}

export const args = {
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
};