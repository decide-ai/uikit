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
  theme: {
    control: 'select',
    options: [
      'darkGreen',
      'black',
      'blue',
      'lightGreen'
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
  type: {
    control: 'select',
    options: ['text', 'email', 'date', 'number', 'tel', 'time', 'password', 'month', 'date'],
    table: {
      defaultValue: { summary: 'text' }
    }
  }
}

export const args = {};