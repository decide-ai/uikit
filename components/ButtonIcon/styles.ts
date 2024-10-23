import cn from 'classnames';

export const disabledSkinClasses = {
  standard: 'disabled:border-transparent ',
  grey: 'disabled:bg-C20 disabled:border-C20',
  linear: 'disabled:border-A90'
}

export const roundedSizeClasses = {
  'full': 'rounded-full', /* 	border-radius: 9999px; */
  '2xl': 'rounded-2xl', /* 16px */
  'xl': 'rounded-xl',  /* 12px */
  'lg': 'rounded-lg',  /* 8px */
  'md': 'rounded-md', /* 6px */
};

export const focusOutlineClasses = {
  darkGreen: 'focus:border-B20 focus:shadow-[0_0_0_4px_rgba(102,221,149,0.3)]',
  black: 'focus:border-B20 focus:shadow-[0_0_0_4px_rgba(102,221,149,0.3)]',
  blue: 'focus:border-G00 focus:shadow-[0_0_0_4px_rgba(77,128,238,0.3)]',
  lightGreen: 'focus:border-B20 focus:shadow-[0_0_0_4px_rgba(102,221,149,0.3)]',
  lavender: 'focus:border-H20 focus:shadow-[0_0_0_4px_rgba(76,74,165,0.3)]',
}

export const iconSkinClasses = (theme: string) => ({
  standard: cn({
    // darkGreen | black | blue
    'group-hover:text-C100 group-active:text-C100': theme === 'darkGreen' || theme === 'black' || theme === 'blue',

    // lightGreen
    'group-hover:text-F00 group-active:text-F00': theme === 'lightGreen',

    // Lavender
    'group-hover:text-H110 group-active:text-H110': theme === 'lavender',
  }),
  grey: cn({
    // darkGreen | black | blue
    'group-hover:text-C100 group-active:text-C100': theme === 'darkGreen' || theme === 'black' || theme === 'blue',

    // lightGreen
    'group-hover:text-F00 group-active:text-F00': theme === 'lightGreen',

    // Lavender
    'group-hover:text-H110 group-active:text-H110': theme === 'lavender',
  }),
  linear: cn({
    // darkGreen
    'group-hover:text-A00 group-active:text-A00': theme === 'darkGreen',

    // black
    'group-hover:text-F00 group-active:text-F00': theme === 'black' || theme === 'lightGreen',

    // blue
    'group-hover:text-G00 group-active:text-G00': theme === 'blue',

    // Lavender
    'group-hover:text-H00 group-active:text-H10': theme === 'lavender',
  })
});

export const skinClasses = (theme: string) => ({
  standard: cn(
    // Common
    'border-transparent',
    {
    // darkGreen
    'hover:bg-A10 active:bg-A00': theme === 'darkGreen',

    // black
    'hover:bg-F30 active:bg-F00': theme === 'black',

    // blue
    'hover:bg-G10 active:bg-G00': theme === 'blue',

    // Lavender
    'hover:bg-H00 active:bg-H10': theme === 'lavender',

    // light green
    'hover:bg-B90 active:bg-B80': theme === 'lightGreen',
  }),
  grey: cn(
    // Common
    'bg-C00 border-C00 hover:border-transparent',
    {
    // darkGreen
    'hover:bg-A10 active:bg-A00': theme === 'darkGreen',

    // black
    'hover:bg-F30 active:bg-F00': theme === 'black',

    // blue
    'hover:bg-G10 active:bg-G00': theme === 'blue',

    // Lavender
    'hover:bg-H00 active:bg-H10': theme === 'lavender',

    // light green
    'hover:bg-B90 active:bg-B80': theme === 'lightGreen',
  }),
  linear: cn(
    'border-[1px] border-C00', 
    {
    // darkGreen
    'hover:border-A50 active:border-A40': theme === 'darkGreen',

    // black
    'hover:border-F50 active:border-F40': theme === 'black',

    // blue
    'hover:border-G40 active:border-G30': theme === 'blue',

    // blue
    'hover:border-H40 active:border-H30': theme === 'lavender',

    // light green
    'hover:border-B10 active:border-B80': theme === 'lightGreen',
  })
})