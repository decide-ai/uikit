import React from 'react';
import cn from 'classnames';
import { getIconByName } from '../index';
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
}) => {
  /** If the requred prop is not obtained, return null */
  if (!iconName) return null;

  /** Get icon by name */
  const IconComponent = getIconByName(iconName);

  /** Сheck if the icon exists */
  if (!IconComponent) {
    console.error(`Icon with name ${iconName} does not exist.`);
    return null;
  }

  return (
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
      <IconComponent 
        size={size}
        className={cn('stroke-current', {
          'text-A00': !disabled,
          'text-A70': disabled
        })} 
      />
    </button>
  );
}