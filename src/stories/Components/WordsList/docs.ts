export const argTypes = {
  wordsList: {
    control: 'object',
    options: [
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six'
    ]
  },
  gridCols: {
    control: 'select',
    options: [
      'cols2',
      'cols3',
      'cols4'
    ]
  },
  textSize: {
    control: 'select',
    options: [
      'base',
      'sm',
      'xs'
    ]
  }
}

export const args = {
  textSize: 'sm',
  gridCols: 'cols3',
  wordsList: [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six'
  ]
};