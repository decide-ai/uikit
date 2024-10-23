import React from 'react';
import cn from "classnames";

import { GridColsProps } from './types';

export const COLS_MAP: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

export const Grid: React.FC<GridColsProps> = ({ 
  children,
  columns, 
  smColumns, 
  lgColumns, 
  className,
  gap = "gap-4",
}) => {
  const gridTemplateCols = COLS_MAP[columns];
  const smGridCols = smColumns ? `sm:${COLS_MAP[smColumns]}` : '';
  const lgGridCols = lgColumns ? `lg:${COLS_MAP[lgColumns]}` : '';

  return (
    <div className={cn("grid", gridTemplateCols, smGridCols, lgGridCols, gap, className)}>
      {children}
    </div>
  );
};