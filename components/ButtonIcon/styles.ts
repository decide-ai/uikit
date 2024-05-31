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

export const iconSkinClasses = (them: string) => ({
  standard: cn({
    // darkGreen | black | blue
    'group-hover:text-C100 group-active:text-C100': them === 'darkGreen' || them === 'black' || them === 'blue',

    // lightGreen
    'group-hover:text-F00 group-active:text-F00': them === 'lightGreen'
  }),
  grey: cn({
    // darkGreen | black | blue
    'group-hover:text-C100 group-active:text-C100': them === 'darkGreen' || them === 'black' || them === 'blue',

    // lightGreen
    'group-hover:text-F00 group-active:text-F00': them === 'lightGreen'
  }),
  linear: cn({
    // darkGreen
    'group-hover:text-A00 group-active:text-A00': them === 'darkGreen',

    // black
    'group-hover:text-F00 group-active:text-F00': them === 'black' || them === 'lightGreen',

    // blue
    'group-hover:text-G00 group-active:text-G00': them === 'blue',
  })
});

export const skinClasses = (them: string) => ({
  standard: cn(
    // Common
    'border-transparent',
    {
    // darkGreen
    'hover:bg-A10 active:bg-A00': them === 'darkGreen',

    // black
    'hover:bg-F30 active:bg-F00': them === 'black',

    // blue
    'hover:bg-G10 active:bg-G00': them === 'blue',

    // light green
    'hover:bg-B90 active:bg-B80': them === 'lightGreen',
  }),
  grey: cn(
    // Common
    'bg-C00 border-C00 hover:border-transparent',
    {
    // darkGreen
    'hover:bg-A10 active:bg-A00': them === 'darkGreen',

    // black
    'hover:bg-F30 active:bg-F00': them === 'black',

    // blue
    'hover:bg-G10 active:bg-G00': them === 'blue',

    // light green
    'hover:bg-B90 active:bg-B80': them === 'lightGreen',
  }),
  linear: cn(
    'border-[1px] border-C00', 
    {
    // darkGreen
    'hover:border-A50 active:border-A40': them === 'darkGreen',

    // black
    'hover:border-F50 active:border-F40': them === 'black',

    // blue
    'hover:border-G40 active:border-G30': them === 'blue',

    // light green
    'hover:border-B70 active:border-B80': them === 'lightGreen',
  })
})