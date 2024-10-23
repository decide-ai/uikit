import React from 'react';
import cn from 'classnames';
import { SpinnerPropTypes, SizeTypes, SkinTypes } from './types';

// Defining classes for different sizes of the spinner
const sizeClasses: SizeTypes = {
  large: 'w-12 h-12',
  medium: 'w-9 h-9',
  base: 'w-[1.5rem] h-[1.5rem]',
  small: 'w-[1.35rem] h-[1.35rem]',
  tiny: 'w-[1.13rem] h-[1.13rem]',
}

// Defining classes for different color schemes (skins) of the spinner
const skinClasses: SkinTypes = {
  standard: 'border-l-A00',
  grey: 'border-l-A70',
  green: 'border-l-B00',
  black: 'border-l-F00',
  blue: 'border-l-G20',
  lavender: 'border-l-H00'
}

/**
 * 
 * The Spinner component is a customizable, circular loading indicator designed for use in React applications. 
 * It leverages Tailwind CSS for styling and keyframe for animation. 
 * The component supports predefined sizes (large, medium, small, tiny) and color schemes (standard, grey, green), 
 * which can be specified through props. Additionally, it offers a customSize prop that allows for explicit control 
 * over the spinner's dimensions, overriding the predefined size options. This makes the Spinner versatile 
 * for various UI contexts, ensuring it can match the design requirements of different parts of an application.
 */
export const Spinner: React.FC<SpinnerPropTypes> = ({
  skin = 'standard',
  size = 'medium',
  customSize,
}) => {
  // Determining spinner size class
  const spinnerSize = size && sizeClasses[size];
  // Determining spinner skin class
  const spinnerSkin = skin && skinClasses[skin];
  // Custom style for size, if specified
  const customStyle = customSize ? 
    { width: `${customSize}px`, height: `${customSize}px` } : {};

  return (
    <span 
      className={cn(
        'animate-spin-fast',
        'inline-block border border-solid rounded-full border-A100 border-[2px]',
        spinnerSize, 
        spinnerSkin,
      )}
      style={customStyle}
    />
  );
}