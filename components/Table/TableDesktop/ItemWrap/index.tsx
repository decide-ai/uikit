import React from 'react';
import cn from 'classnames';
import { ColumnAlignClasses } from '../../styles';

// Types
import { TableItemWrapPropTypes } from '../../types';

export const ItemWrap: React.FC<TableItemWrapPropTypes> = ({
  children,
  align,
}) => (
  <div 
    className={cn(
      'flex items-center gap-1',
      align && ColumnAlignClasses[align]
    )}
  >
    {children}
  </div>
);