export const argTypes = {
  total: {
    control: {
      type: 'number',
      min: 0,
      max: 100,
    },
    table: {
      defaultValue: { summary: 0 }
    }
  },
  progress: {
    control: {
      type: 'number',
      min: 0,
      max: 100,
    },
    table: {
      defaultValue: { summary: 0 }
    }
  },
  type: {
    control: 'select',
    options: ['line', 'dash'],
    table: {
      defaultValue: { summary: 'line' }
    }
  },
  segmentColorKey: {
    control: 'text',
    table: {
      defaultValue: { summary: 'B00' }
    }
  }
}

export const args = {
};