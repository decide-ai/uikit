// Enumerations for setting consistent background colors using Tailwind CSS classes.
enum BgColorSet {
  // Background color mappings.
  A00 = 'bg-A00',
  A10 = 'bg-A10',
  C00 = 'bg-C00',
  C50 = 'bg-C50',
  B80 = 'bg-B80',
  B90 = 'bg-B90',
}

// Enumerations for setting consistent text colors using Tailwind CSS classes.
enum TextColorSet {
  // Text color mappings.
  A00 = 'text-A00',
  A50 = 'text-A50',
  C100 = 'text-C100',
}

// Enumerations for setting consistent border colors using Tailwind CSS classes.
enum BorderColorSet {
  // Border color mappings.
  A00 = 'border-A00',
  A10 = 'border-A10',
  A80 = 'border-A80',
  B80 = 'border-B80',
  B90 = 'border-B90',
  C00 = 'border-C00',
}

// Enumeration for base border style.
enum BorderStyle {
  base = 'border-solid border-[1px]'
}

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
  standart: `hover:${BgColorSet.A10} hover:${BorderColorSet.A10} active:${BgColorSet.A00} active:${BorderColorSet.A00}`,
  inline: `hover:${BorderColorSet.A10} hover:${BgColorSet.A10} hover:${TextColorSet.C100} active:${BorderColorSet.A00} active:${BgColorSet.A00} active:${TextColorSet.C100}`,
  grey: `hover:${BorderColorSet.A10} hover:${BgColorSet.A10} hover:${TextColorSet.C100} active:${BorderColorSet.A00} active:${BgColorSet.A00} active:${TextColorSet.C100}`,
  inlineGrey: `hover:${BgColorSet.C50} active:${BgColorSet.C00}`,
  light: `hover:${BgColorSet.B90} hover:${BorderColorSet.B90} active:${BorderColorSet.B80} active:${BgColorSet.B80}`
}

// Disabled state styles to indicate non-interactive elements.
export const disabledSkin = {
  standart: `disabled:${BorderColorSet.C00} disabled:${BgColorSet.C00} disabled:${TextColorSet.A50}`,
  inline: `disabled:${BorderColorSet.C00} disabled:${TextColorSet.A50}`,
  grey: `disabled:${BorderColorSet.C00} disabled:${BgColorSet.C00} disabled:${TextColorSet.A50}`,
  inlineGrey: `disabled:${BorderColorSet.C00} disabled:${TextColorSet.A50}`,
  light: `disabled:${BorderColorSet.C00} disabled:${TextColorSet.A50}`
}

// Comprehensive skin classes combining border, background, text colors, and interaction states.
export const skinClasses = {
  standart: `${BorderStyle.base} ${BorderColorSet.A00} ${BgColorSet.A00} ${TextColorSet.C100} ${hoverAndActiveStyles.standart} ${disabledSkin.standart}`,
  inline: `bg-white ${BorderStyle.base} ${BorderColorSet.A00} ${TextColorSet.A00} ${hoverAndActiveStyles.inline} ${disabledSkin.inline}`,
  grey: `${BorderStyle.base} ${BorderColorSet.C00} ${BgColorSet.C00} ${TextColorSet.A00} ${hoverAndActiveStyles.grey} ${disabledSkin.grey}`,
  inlineGrey: `bg-white ${BorderStyle.base} ${BorderColorSet.A80} ${TextColorSet.A00} ${hoverAndActiveStyles.inlineGrey} ${disabledSkin.inlineGrey}`, 
  light: `bg-white ${BorderStyle.base} ${BorderColorSet.A80} ${TextColorSet.A00} ${hoverAndActiveStyles.light} ${disabledSkin.light}`,
};