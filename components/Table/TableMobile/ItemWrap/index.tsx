import React from 'react';
import cn from 'classnames';
// Types
import { MobileItemWrapPropTypes } from '../../types';

// Types
import { MobileItemWrapPropTypes } from '../../types';

export const ItemWrap: React.FC<MobileItemWrapPropTypes> = ({
  highlightedRows,
  record,
  children,
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
    ? 'bg-B90' : 'bg-white';

  return (
    <div 
      className={cn(
        'flex flex-col gap-2 p-3 rounded-lg',
        backgroundColorClass,
      )}
    >
      {children}
    </div>
  );
}