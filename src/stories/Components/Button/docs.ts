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
      'inline',
      'grey',
      'inlineGrey',
      'light'
    ]
  },
  iconName: {
    control: 'text',
    options: null
  },
  indicator: {
    control: 'select',
    options: [
      null,
      'red',
      'green',
      'grey',
      'yellow'
    ]
  }
}

export const args = {
  size: 'medium',
  skin: 'standard',
  buttonText: 'Button',
};