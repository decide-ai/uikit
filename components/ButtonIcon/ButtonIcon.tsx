import React from 'react';
import cn from 'classnames';
import { DynamicIcon } from '../index';
import { ButtonIconPropTypes } from './types';
import { skinClasses, disabledSkinClasses } from './styles';

/**
 * ButtonIcon is a React functional component that renders a button with an icon.
 * 
 * The component displays a button with an icon.
 * This component displays only the icon.
 * 
 * The component uses the `iconName` prop to determine which icon to display inside the button.
 */
export const ButtonIcon: React.FC<ButtonIconPropTypes> = ({ 
  iconName,
  disabled,
  skin = 'standard',
  size = 24,
  onClick,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={cn(
      skinClasses[skin],
      disabledSkinClasses[skin],
      'border-solid border-[1px] rounded-[6px] cursor-pointer p-0.5',
      {
        'pointer-events-none': disabled,
      }
    )}
  >
    <DynamicIcon
      iconName={iconName}
      size={size}
      className={cn('stroke-current', {
        'text-A00': !disabled,
        'text-A70': disabled
      })} 
    />
  </button>
);