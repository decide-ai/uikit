import React from "react";
import cn from 'classnames';
import { ColorBoxProps } from '../types';

export const ColorBox: React.FC<ColorBoxProps> = ({ name, hex }) => (
  <div className={cn(
    'flex flex-col',
    'w-[6rem] h-[6rem]'
  )}>
    <div 
      className={cn('h-full w-full')}
      style={{ backgroundColor: hex }}
    />
    <div className={cn(
      "pt-2",
      "flex flex-col",
      "font-neue-montreal font-thin text-xs"
    )}>
      <span>{name}</span> 
      <span>{hex}</span> 
    </div>
  </div>
);