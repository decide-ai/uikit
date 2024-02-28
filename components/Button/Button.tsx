import React from 'react';
import cn from 'classnames';
import { ButtonPropsTypes } from './types';
import { Indicator } from './Indicator';
import { ButtonIcon } from './ButtonIcon';
import { Loader } from './Loader';
import { 
  skinClasses, 
  sizeClasses, 
  sizeClassesWithIcon,
  hoverAndActiveStyles,
  disabledSkin,
} from './styles';

/**
 * This component is responsible for rendering a customizable button in a React application.
 * It utilizes Tailwind CSS for styling and supports a variety of props to control its appearance and behavior.
 */
export const Button: React.FC<ButtonPropsTypes> = ({
  size = 'medium',
  skin = 'standard',
  disabled,
  fullWidth,
  loading,
  iconName,
  children,
  indicator,
  buttonText,
  onClick,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn({
        'pointer-events-none': disabled,
        'w-full': fullWidth,
      },
      skinClasses[skin],
      hoverAndActiveStyles[skin],
      disabledSkin[skin],
      iconName ? sizeClassesWithIcon[size] : sizeClasses[size],
      'svgGroup relative overflow-hidden',
      'flex items-center justify-center',
      'font-neue-montreal font-regular',
      'transition duration-100 ease-in-out',
    )}
  >
    {loading && (
      <Loader 
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