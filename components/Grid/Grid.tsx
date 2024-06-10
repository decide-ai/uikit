import React from 'react';
import cn from 'classnames';
import { GridPropTypes } from './types';

export const Grid: React.FC<GridPropTypes> = ({ children, className }) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <div className={cn(
      className,
      "w-full grid grid-cols-4 gap-2",
      "md:grid-cols-8 lg:grid-cols-12 md:gap-4 lg:gap-5"
    )}>
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
        </React.Fragment>
      ))}
    </div>
  );
}