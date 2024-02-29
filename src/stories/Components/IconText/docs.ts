export const argTypes = {
  textSize: {
    control: 'select',
    options: [
      "2xs",
      "xs",
      "sm",
      "base",
      "lg"
    ],
    table: {
      defaultValue: { summary: 'medium' }
    }
  },
  iconSize: {
    control: 'number',
    table: {
      defaultValue: { summary: 24 }
    }
  },
  iconStroke: {
    control: 'text',
    table: {
      defaultValue: { summary: 'A00' }
    }
  },
  textColor: {
    control: 'text',
    table: {
      defaultValue: { summary: 'A00' }
    }
  }
}

export const args = {};