import React from 'react';
import cn from 'classnames';

// Types / Styles
import { RowVerticalPaddingClasses } from '../../styles';
import { GridWrapPropTypes } from '../../types';

export const GridWrap: React.FC<GridWrapPropTypes> = ({ 
  children, 
  className, 
  rowVerticalSpace, 
  highlightedRows, 
  record,
  rowIndex,
}) => {
  /**
   * Flag indicating whether the line should be highlighted. 
   * Mast use a key "id" for each one to highlight a table row.
   */
  let highLightRowClasses = null;
  if (highlightedRows?.length && typeof record?.id === 'string') {
    highLightRowClasses = highlightedRows.includes(record['id']);
  }

  /**
   * Change the background color between even and odd for a better table row visual effect.
   */
  const backgroundColorClass = highLightRowClasses
    ? 'bg-B90'
    : rowIndex !== undefined && rowIndex % 2 === 0
    ? 'bg-gray-100'
    : 'bg-white';

  return (
    <div 
      className={cn(
        'px-4 md:px-5',
        'grid grid-cols-[repeat(auto-fit,minmax(40px,1fr))] gap-4',
        'rounded-lg',
        rowVerticalSpace && RowVerticalPaddingClasses[rowVerticalSpace],
        backgroundColorClass,
        className,
      )}
    >
      {children}
    </div>
  );
}