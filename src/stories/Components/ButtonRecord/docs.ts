export const argTypes = {
  type: {
    control: 'select',
    options: ['photo', 'record'],
    table: {
      defaultValue: { summary: 'photo' }
    }
  },
  textColor: {
    control: 'text',
    table: {
      defaultValue: { summary: 'A00' }
    }
  }
}

export const args = {
  timer: '0:00',
  label: 'Click play to start record',
  type: 'photo',
  active: false,
  disabled: false,
  textColor: 'A00'
};