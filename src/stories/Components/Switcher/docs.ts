export const argTypes = {
  size: {
    control: 'select',
    options: ['medium', 'small'],
    table: {
      defaultValue: { summary: 'small' }
    }
  },
  initialChecked: {
    table: {
      defaultValue: { summary: false }
    }
  },
  disabled: {
    table: {
      defaultValue: { summary: false }
    }
  },
  viewOnly: {
    table: {
      defaultValue: { summary: false }
    }
  }
}

export const args = {};