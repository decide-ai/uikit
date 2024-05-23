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
    table: {
      defaultValue: { summary: 'base' },
    },
  },
  weight: {
    control: 'select',
    table: {
      defaultValue: { summary: 'normal' }
    }
  },
  style: {
    control: 'select',
    table: {
      defaultValue: { summary: 'normal' }
    }
  },
  color: {
    control: 'text',
    table: {
      defaultValue: { summary: 'A00' }
    }
  },
  uppercase: {
    control: 'boolean',
    table: {
      defaultValue: { summary: false }
    }
  }
};

export const args = {
  tagName: 'div',
  size: 'base',
  weight: 'normal',
  style: 'normal',
  color: 'A00',
  children: 'The quick brown fox jumps over the lazy dog.'
}