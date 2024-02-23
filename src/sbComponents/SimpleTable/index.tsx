import React from 'react';
import cn from 'classnames';
import { SimpleTableProps } from '../types';

export const SimpleTable: React.FC<SimpleTableProps> = ({ 
  children,
  maxWidth = 'none',
}) => (
  <ul className={cn(
    `max-w-${maxWidth}`
  )}>
    {React.Children.toArray(children).map((item, index) => (
      <li 
        key={index}
        className={cn(
          'p-4',
          'flex justify-between',
          'rounded-md', 
          { 'bg-C00': (index % 2 === 0) }
        )}
      >
        {item}
      </li>
    ))}
  </ul>
);