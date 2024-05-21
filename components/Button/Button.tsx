import React from 'react';
import cn from 'classnames';

// Components
import { Indicator } from './Indicator';
import { ButtonIcon } from './ButtonIcon';
import { Loader } from './Loader';

// types
import { 
  ButtonPropsTypes,
} from './types';

// Styles
import {
  sizeClasses, 
  sizeClassesWithIcon,
  roundedSizeClasses,
  skinClasses,
} from './styles';

/**
 * This component is responsible for rendering a customizable button in a React application.
 * It utilizes Tailwind CSS for styling and supports a variety of props to control its appearance and behavior.
 */
export const Button: React.FC<ButtonPropsTypes> = ({
  size = 'medium',
  skin = 'standard',
  them = 'darkGreen',
  spaceBetween,
  rounded,
  disabled,
  fullWidth,
  loading,
  iconName,
  children,
  indicator,
  buttonText,
  onClick,
}) => {
  const skinClassesInline = skinClasses(them);
  const skinClass = skinClassesInline[skin];
  const roundedClasses = rounded ? 'rounded-full' : roundedSizeClasses[size];
  const iconIndentationClasses = iconName ? sizeClassesWithIcon[size] : sizeClasses[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn({
          'pointer-events-none': disabled,
          'w-full': fullWidth,
          'justify-center': !spaceBetween,
          'justify-between': spaceBetween,
        },
        skinClass,
        iconIndentationClasses,
        roundedClasses,
        'svgGroup relative overflow-hidden',
        'flex items-center flex-shrink-0',
        'font-neue-montreal font-regular whitespace-nowrap',
        'transition duration-100 ease-in-out',
        
        // Use for accessible frontend components, the focus styles will only be shown 
        // when a user uses a keyboard to focus an element.
        'focus:outline-none focus:box-shadow-focus-ring focus-visible:box-shadow-focus-ring',
      )}
    >
      {loading && (
        <Loader
          them={them}
          size={size} 
          skin={skin}
        />
      )}

      {indicator && (
        <Indicator 
          indicator={indicator} 
          disabled={disabled}
        />
      )}

      {buttonText}
      
      {children && children}
      
      {iconName && (
        <ButtonIcon 
          iconName={iconName}
          skin={skin}
          size={size}
        />
      )}
    </button>
  );
}