import React from 'react';
import { getIconsMap } from "../index";
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

  /** Get the icons map */
  const iconsMap = getIconsMap();

  /** Get the icon component by name */
  const IconObject = iconsMap.get(iconName);

  /** Check if the icon exists */
  if (!IconObject) {
    console.error(`Icon with name ${iconName} does not exist.`);
    return null;
  }

  /** Destructure the component from IconObject */
  const { component: IconComponent } = IconObject;

  return (
    <IconComponent {...restProps} />
  );
};