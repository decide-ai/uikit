import cn from "classnames";

const BORDER_SOLID = 'border-solid border-[1px]'

// Standard size classes without icons.
export const sizeClasses = {
  large: 'text-base py-4 px-6',
  medium: 'text-sm py-3 px-5',
  small: 'text-xs py-2.5 px-4',
  tiny: 'text-xs py-2 px-4',
};

// Adjusted padding to accommodate icons.
export const sizeClassesWithIcon = {
  large: 'text-base py-[0.9375rem] px-6',
  medium: 'text-sm py-[0.6875rem] px-5',
  small: 'text-xs py-[0.5625rem] px-4',
  tiny: 'text-xs py-[0.4375rem] px-4',
};

export const roundedSizeClasses = {
  'full': 'rounded-full', /* 	border-radius: 9999px; */
  '2xl': 'rounded-2xl', /* 16px */
  'xl': 'rounded-xl',  /* 12px */
  'lg': 'rounded-lg',  /* 8px */
  'md': 'rounded-md', /* 6px */
};

export const skinClasses = ((theme: string) => ({
  standard: cn(
    // Common
    BORDER_SOLID, 
    'disabled:border-C00 disabled:bg-C00', 
    {
    // Dark green
    'border-A00 bg-A00 text-C100': theme === 'darkGreen',
    'hover:bg-A10 hover:border-A10 active:bg-A00 active:border-A00': theme === 'darkGreen',
    'disabled:text-A50': theme === 'darkGreen',

    // Black
    'border-F00 bg-F00 text-C100': theme === 'black',
    'hover:bg-F30 hover:border-F30 active:bg-F00 active:border-F00': theme === 'black',
    'disabled:text-F80': theme === 'black',

    // Blue
    'border-G00 bg-G00 text-C100': theme === 'blue',
    'hover:bg-G30 hover:border-G30 active:bg-G00 active:border-G00': theme === 'blue',
    'disabled:text-F70': theme === 'blue',
  }),
  inline: cn(
    // Common
    'bg-white',
    'disabled:border-C00', 
    BORDER_SOLID, 
    {
    // Dark green
    'border-A00 text-A00': theme === 'darkGreen',
    'hover:border-A10 hover:bg-A10 hover:text-C100 active:border-A00 active:bg-A00 active:text-C100': theme === 'darkGreen',
    'disabled:text-A50': theme === 'darkGreen',

    // Black
    'border-F00 text-F00': theme === 'black',
    'hover:border-F30 hover:bg-F30 hover:text-C100 active:border-F00 active:bg-F00 active:text-C100': theme === 'black',
    'disabled:text-F80': theme === 'black',

    // Blue
    'border-G00 text-G00': theme === 'blue',
    'hover:border-G00 hover:bg-G00 hover:text-C100 active:border-G00 active:bg-G00 active:text-C100': theme === 'blue',
    'disabled:text-F70': theme === 'blue',
  }),
  grey: cn(
    // Common
    'border-C00 bg-C00',
    'disabled:border-C00 disabled:bg-C00', 
    {
    // Dark green
    'text-A00': theme === 'darkGreen',
    'hover:border-A10 hover:bg-A10 hover:text-C100 active:border-A00 active:bg-A00 active:text-C100': theme === 'darkGreen',
    'disabled:text-A50': theme === 'darkGreen',

    // Black
    'text-F00': theme === 'black',
    'hover:border-F30 hover:bg-F30 hover:text-C100 active:border-F00 active:bg-F00 active:text-C100': theme === 'black',
    'disabled:text-F80': theme === 'black',

    // Blue
    'text-G00': theme === 'blue',
    'hover:border-G00 hover:bg-G00 hover:text-C100 active:border-G00 active:bg-G00 active:text-C100': theme === 'blue',
    'disabled:text-F70': theme === 'blue',
  }),
  inlineGrey: cn(
    // Common
    'bg-white',
    'hover:bg-C50', 
    'active:bg-C00', 
    'disabled:border-C00', 
    BORDER_SOLID, 
    {
    // Dark green
    'border-A80 text-A00': theme === 'darkGreen',
    'disabled:text-A50': theme === 'darkGreen',

    // Black
    'border-F80 text-F00': theme === 'black',
    'disabled:text-F80': theme === 'black',

    // Blue
    'border-G50 text-G00': theme === 'blue',
    'disabled:text-F70': theme === 'blue',
  }),
  light: cn(
    // Common
    'bg-white',
    'hover:bg-B90 hover:border-B90',
    'active:border-B80 active:bg-B80',
    'disabled:border-C00', 
    BORDER_SOLID, 
    {
    // Dark green
    'border-A80 text-A00': theme === 'darkGreen',
    'disabled:text-A50': theme === 'darkGreen',

    // Black
    'border-C00 text-F00': theme === 'black',
    'hover:border-F90 hover:bg-F110 hover:text-F00 active:border-F90 active:bg-F100 active:text-F00': theme === 'black',
    'disabled:text-F80': theme === 'black',

    // Blue
    'border-C00 text-G00': theme === 'blue',
    'hover:border-G50 hover:bg-G80 hover:text-G00 active:border-G50 active:bg-G50 active:text-G00': theme === 'blue',
    'disabled:text-F70': theme === 'blue',
  }),
  limpid: cn(
    // Common
    'border-C00 text-C00',
    'disabled:border-C00 disabled:bg-C00',
    BORDER_SOLID,
    {
    // darkGreen
    'hover:border-A20 hover:bg-A10 active:border-A30 active:bg-A20': theme === 'darkGreen',

    // black
    'hover:border-F60 hover:bg-F40 active:border-F60 active:bg-F50': theme === 'black',

    // black
    'hover:border-G30 hover:text-F00 hover:bg-G30 active:border-G30 active:bg-G40': theme === 'blue',
  })
}))
