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
      'light',
      'pink'
    ]
  },
  them: {
    control: 'select',
    options: [
      'darkGreen',
      'black',
    ],
    table: {
      defaultValue: { summary: 'darkGreen' }
    }
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
  },
  spaceBetween: {
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  },
  rounded: {
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  }
}

export const args = {
  size: 'medium',
  skin: 'standard',
  buttonText: 'Button',
};