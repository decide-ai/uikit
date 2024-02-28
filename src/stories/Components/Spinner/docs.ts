export const argTypes = {
  size: {
    control: 'select',
    options: [
      'large',
      'medium',
      'small',
      'tiny'
    ],
    table: {
      defaultValue: { summary: 'medium' }
    }
  },
  skin: {
    control: 'select',
    options: [
      'standard',
      'grey',
      'green'
    ]
  }
}

export const args = {
  size: 'medium',
  skin: 'standars'
};