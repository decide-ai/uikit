export const argTypes = {
  tagName: {
    control: 'select',
    options: [
      'h1', 
      'h2', 
      'h3', 
      'h4', 
      'p', 
      'span', 
      'div'
    ],
    description: 'Component Tag Name: The component supports the use of any HTML tag listed in the supported tags list.',
    table: {
      defaultValue: { summary: 'div' },
    },
  },
  size: {
    control: 'select',
    options: [
      '2xs', 
      'xs', 
      'sm',  
      'base', 
      'lg', 
      'xl', 
      '2xl', 
      '3xl', 
      '4xl', 
      '5xl', 
      '6xl', 
      '7xl'
    ],
    description: 'Typography Size: For additional information about typography sizes, please refer to the "Font" section.',
    table: {
      defaultValue: { summary: 'base' },
    },
  },
  weight: {
    description: 'Typography weight',
    table: {
      defaultValue: { summary: 'normal' }
    }
  },
  color: {
    control: 'color',
    description: 'Typography Color: The default value is A00. For additional information about the typography color palette, please refer to the "Color" section.'
  }
};

export const args = {
  tagName: 'div',
  size: 'base',
  weight: 'normal',
  style: 'normal',
  children: 'The quick brown fox jumps over the lazy dog.'
}