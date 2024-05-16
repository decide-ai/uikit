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
  large: 'rounded-lg',
  medium: 'rounded-lg',
  small: 'rounded-md',
  tiny: 'rounded-md',
}

export const skinClasses = ((them: string) => ({
  standard: cn(
    // Common
    BORDER_SOLID, 
    'disabled:border-C00 disabled:bg-C00', 
    {
    // Dark green
    'border-A00 bg-A00 text-C100': them === 'darkGreen',
    'hover:bg-A10 hover:border-A10 active:bg-A00 active:border-A00': them === 'darkGreen',
    'disabled:text-A50': them === 'darkGreen',

    // Black
    'border-F00 bg-F00 text-C100': them === 'black',
    'hover:bg-F30 hover:border-F30 active:bg-F00 active:border-F00': them === 'black',
    'disabled:text-F80': them === 'black',
  }),
  inline: cn(
    // Common
    'bg-white',
    'disabled:border-C00', 
    BORDER_SOLID, 
    {
    // Dark green
    'border-A00 text-A00': them === 'darkGreen',
    'hover:border-A10 hover:bg-A10 hover:text-C100 active:border-A00 active:bg-A00 active:text-C100': them === 'darkGreen',
    'disabled:text-A50': them === 'darkGreen',

    // Black
    'border-F00 text-F00': them === 'black',
    'hover:border-F30 hover:bg-F30 hover:text-C100 active:border-F00 active:bg-F00 active:text-C100': them === 'black',
    'disabled:text-F80': them === 'black',
  }),
  grey: cn(
    // Common
    'border-C00 bg-C00',
    'disabled:border-C00 disabled:bg-C00', 
    {
    // Dark green
    'text-A00': them === 'darkGreen',
    'hover:border-A10 hover:bg-A10 hover:text-C100 active:border-A00 active:bg-A00 active:text-C100': them === 'darkGreen',
    'disabled:text-A50': them === 'darkGreen',

    // Black
    'text-F00': them === 'black',
    'hover:border-F30 hover:bg-F30 hover:text-C100 active:border-F00 active:bg-F00 active:text-C100': them === 'black',
    'disabled:text-F80': them === 'black',
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
    'border-A80 text-A00': them === 'darkGreen',
    'disabled:text-A50': them === 'darkGreen',

    // Black
    'border-F80 text-F00': them === 'black',
    'disabled:text-F80': them === 'black',
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
    'border-A80 text-A00': them === 'darkGreen',
    'disabled:text-A50': them === 'darkGreen',

    // Black
    'border-C00 text-F00': them === 'black',
    'disabled:text-F80': them === 'black',
  }),
  pink: cn(
    'border-solid border-[1px] border-G00 bg-G00 text-white',
    'hover:bg-G10 hover:border-G10 active:bg-G00 active:border-G00',
    'disabled:border-C00 disabled:bg-C00'
  ),
}))
