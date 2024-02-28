import React, { Fragment, FC } from 'react';
import cn from 'classnames';
import { ButtonPropsTypes } from './types';
import { Indicator } from './Indicator';
import { ButtonIcon } from './ButtonIcon';
import { Loader } from './Loader';
import { skinClasses, sizeClasses, sizeClassesWithIcon } from './styles';

/**
 * This component is responsible for rendering a customizable button in a React application.
 * It utilizes Tailwind CSS for styling and supports a variety of props to control its appearance and behavior.
 */
export const Button: FC<ButtonPropsTypes> = ({
  size = 'medium',
  skin = 'standard',
  disabled,
  fullWidth,
  loading,
  iconName,
  children,
  indicator,
  buttonText,
}) => (
  <button
    disabled={disabled}
    className={cn({
        'pointer-events-none': disabled,
        'w-full': fullWidth,
      },
      'svgGroup relative overflow-hidden',
      'flex items-center justify-center',
      'font-neue-montreal font-regular',
      skinClasses[skin],
      iconName ? sizeClassesWithIcon[size] : sizeClasses[size],
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