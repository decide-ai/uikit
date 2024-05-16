export const argTypes = {
  skin: {
    control: 'select',
    options: [
      'inline',
      'grey',
    ],
    table: {
      defaultValue: { summary: 'inline' }
    }
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
  size: {
    control: 'select',
    options: ['medium', 'small'],
    table: {
      defaultValue: { summary: 'medium' }
    }
  },
}

export const args = {};