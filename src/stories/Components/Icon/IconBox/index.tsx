import React from 'react';
import { IconListItem, IconProps } from '../types';
import cn from 'classnames';

export const IconBox = ({ 
  name, 
  component, 
  ...props 
}: IconListItem & IconProps) => {
  const IconComponent = component;
  if (!IconComponent) return null;
  return (
    <div
      className={cn(
        'w-[14rem] h-[14rem]',
        'flex items-center justify-center flex-col',
        'border border-dashed border-A90 rounded-md',
        'hover:border-B00'
      )}
    >
      <IconComponent {...props} />
      <div 
        className={cn(
          'pt-4',
          'font-neue-montreal font-thin text-xs'
        )}
      >{name}</div>
    </div>
  );
}