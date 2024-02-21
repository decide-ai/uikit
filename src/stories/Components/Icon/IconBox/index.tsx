import React from 'react';
import * as Icons from '../../../../../components/Icon';
import { IconsType, IconListItem, IconProps } from '../types';

const IconsComponentMap: IconsType = Icons;

export const IconBox = ({ 
  name, 
  component, 
  ...props 
}: IconListItem & IconProps) => {
  const IconComponent = IconsComponentMap[name];
  if (!IconComponent) return null;
  return (
    <div 
      key={name} 
      className="w-[200px] h-[200px] p-4 flex items-center justify-center rounded-md border border-dashed border-[#DDE3E3] flex flex-col"
    >
      <IconComponent {...props} />
      <div className="text-xs text-black pt-4">{name}</div>
    </div>
  );
}