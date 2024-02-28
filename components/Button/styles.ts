// Standard size classes without icons.
export const sizeClasses = {
  large: 'text-sm py-4 px-6 rounded-lg',
  medium: 'text-sm py-3 px-5 rounded-lg',
  small: 'text-xs py-2.5 px-4 rounded-md',
  tiny: 'text-xs py-2 px-4 rounded-md',
};

// Adjusted padding to accommodate icons.
export const sizeClassesWithIcon = {
  large: 'text-sm py-[0.9375rem] px-6 rounded-lg',
  medium: 'text-sm py-[0.6875rem] px-5 rounded-lg',
  small: 'text-xs py-[0.5625rem] px-4 rounded-md',
  tiny: 'text-xs py-[0.4375rem] px-4 rounded-md',
};

// Different styles for hover and active states based on button skin.
export const hoverAndActiveStyles = {
  standard: `hover:bg-A10 hover:border-A10 active:bg-A00 active:border-A00`,
  inline: `hover:border-A10 hover:bg-A10 hover:text-C100 active:border-A00 active:bg-A00 active:text-C100`,
  grey: `hover:border-A10 hover:bg-A10 hover:text-C100 active:border-A00 active:bg-A00 active:text-C100`,
  inlineGrey: `hover:bg-C50 active:bg-C00`,
  light: `hover:bg-B90 hover:border-B90 active:border-B80 active:bg-B80`
}

// Disabled state styles to indicate non-interactive elements.
export const disabledSkin = {
  standard: `disabled:border-C00 disabled:bg-C00 disabled:text-A50`,
  inline: `disabled:border-C00 disabled:text-A50`,
  grey: `disabled:border-C00 disabled:bg-C00 disabled:text-A50`,
  inlineGrey: `disabled:border-C00 disabled:text-A50`,
  light: `disabled:border-C00 disabled:text-A50`
}

// Comprehensive skin classes combining border, background, text colors, and interaction states.
export const skinClasses = {
  standard: `border-solid border-[1px] border-A00 bg-A00 text-C100`,
  inline: `bg-white border-solid border-[1px] border-A00 text-A00`,
  grey: `border-solid border-[1px] border-C00 bg-C00 text-A00`,
  inlineGrey: `bg-white border-solid border-[1px] border-A80 text-A00`, 
  light: `bg-white border-solid border-[1px] border-A80 text-A00`,
};
