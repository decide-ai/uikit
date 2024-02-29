import React from 'react';
import { getIconByName } from '../index';
import { DynamicIconPropTypes } from './types';

/**
 * Gets icon by iconName from icon array and render icon component.
 * Use this component is if need icon dynamically.
 * Gets props as normal Icon component.
 */
export const DynamicIcon: React.FC<DynamicIconPropTypes> = ({ 
  iconName,
  ...restProps
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
    <IconComponent {...restProps} />
  );
};