import React from 'react';
import cn from 'classnames';
import { DrawerPropTypes } from './types';

export const Drawer: React.FC<DrawerPropTypes> = ({ 
  children, 
  className,
  skin = 'standard',
  empty, 
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

  console.log('skin --> ', skin);
  
  /**
   * Renders the Drawer component with conditional styling based on the `empty` prop. By default,
   * padding is applied to provide spacing around the content. If `empty` is true, the padding is
   * removed to allow for alternative content styling or to reflect an empty state visually.
   */
  return (
    <div className={cn('rounded-lg sm:rounded-md', className, {
      'lg:p-5 md:p-4 p-3': !empty,
      'bg-C00': skin === 'grey',
      'bg-white': skin === 'standard',
      'bg-B90': skin === 'green',
    })}>{children}</div>
  );
}