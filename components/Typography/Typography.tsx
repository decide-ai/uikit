import React from 'react';
import cn from 'classnames';
import { TypographyProps } from './types';
import { 
  ADAPTIVE_SIZE_MAP, 
  REGULAR_SIZE_MAP,
} from './typographyClassMap';

export const Typography: React.FC<TypographyProps> = ({
  tagName = 'div',
  children,
  size = 'base',
  weight = 'normal',
  adaptive,
  style = 'normal',
  color = 'A00',
}) => {
  const Tag = tagName as keyof JSX.IntrinsicElements;
  const sizeClass = adaptive ? ADAPTIVE_SIZE_MAP[size] : REGULAR_SIZE_MAP[size];
  return (
    <Tag
      className={cn(
        sizeClass, 
        `font-${weight} ${style} text-${color}`, 
        'font-neue-montreal'
      )}
    >
      {children}
    </Tag>
  );
}