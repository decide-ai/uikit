import React from 'react';
import cn from 'classnames';
import { getIconByName } from '../../index';
import { ButtonIconTypes } from '../types';
import { svgIconSkinColors } from './styles';

/**
 * The icon size depends on the button size props
 */
const SIZE = {
  large: 22,
  medium: 22,
  small: 18,
  tiny: 18
}

/**
 * Is a React component designed to display icons inside buttons
 * 
 * iconName - The icon name that determines which icon will be displayed.
 * 
 * size - icon size. Available values: "large 22px", "medium 22px", "small 18px", "tiny 18px". 
 *        The default size is "medium".
 * 
 * skin - An icon skin option that specifies the color of the icon. 
 *        The values depend on the settings in svgIconSkinColors.
 */
export const ButtonIcon: React.FC<ButtonIconTypes> = ({ 
  iconName, 
  size,
  skin 
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

  /** Button icon stroke color */
  const iconColor = skin && svgIconSkinColors[skin];
  const iconSize = size && SIZE[size];

  return (
    <span className={cn('rounded-md ml-2')}>
      <IconComponent
        size={iconSize}
        className={`stroke-current ${iconColor}`}
        strokeWidth={1.5}
      />
    </span>
  );
}