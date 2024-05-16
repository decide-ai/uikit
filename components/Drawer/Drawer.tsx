import React from 'react';
import cn from 'classnames';
import { DrawerPropTypes } from './types';

export const Drawer: React.FC<DrawerPropTypes> = ({ 
  children, 
  className,
  skin = 'standard',
  size = 'medium',
  rounded = 'lg',
  empty,
  shadow,
}) => {
  /**
   * Validates the existence of `children` to ensure the Drawer component has content to display.
   * If `children` is not provided, an error message is logged, and the function returns null,
   * preventing the rendering of an empty or undefined Drawer.
   */
  if (!children) {
    console.error(`Children in Drawer component does not exist. Please add children`);
    return null;
  }

  /**
   * Renders the Drawer component with conditional styling based on the `empty` prop. By default,
   * padding is applied to provide spacing around the content. If `empty` is true, the padding is
   * removed to allow for alternative content styling or to reflect an empty state visually.
   */
  return (
    <div className={cn(className, {
      'p-3 md:p-4 lg:p-5': !empty && size === 'medium',
      'p-3 p-8 md:px-4 md:py-10 lg:px-5': !empty && size === 'large',
      'bg-C00': skin === 'grey',
      'bg-white': skin === 'standard',
      'bg-B90': skin === 'green',
      'rounded-xl sm:rounded-2xl': rounded === 'xl',
      'md:rounded-lg': rounded === 'lg',
      'md:rounded-md': rounded === 'md',
      'drop-shadow-lg': shadow,
    })}>{children}</div>
  );
}