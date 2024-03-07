import React from 'react';
import cn from 'classnames';
import { ConnectLinePropTypes } from '../types';

/**
 * Returns the appropriate border class based on the line's visibility, state, and type.
 */
const getBorderClass = (
  state: string | undefined, 
  isHideLine: boolean, 
  type?: 'right' | 'left'
) => {
  if (isHideLine) {
    return 'border-transparent';
  }

  // Special case for when the line is active and on the right side.
  if (state === 'active' && type === 'right') {
    return 'border-A80 border-dashed';
  }

  // Return border classes based on the current state.
  switch (state) {
    case 'completed':
    case 'active':
      return 'border-B00';
    default:
      return 'border-A80 border-dashed';
  }
};

export const ConnectLine: React.FC<ConnectLinePropTypes> = ({ state, isHideLine, type }) => {
  const borderColor = getBorderClass(state, isHideLine, type);
  
  return (
    <div 
      className={cn(
        "w-full h-[1px] border-b-[1px] border-dashed", 
        borderColor,
      )}
    />
  );
}