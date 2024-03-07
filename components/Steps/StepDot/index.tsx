import React from 'react';
import cn from 'classnames';
import { StepDotPropTypes } from '../types';

/**
 * Returns the appropriate border class based on the line's visibility, state, and type.
 */
const getBorderClass = (
  state: string | undefined,
) => {
  // Return border classes based on the current state.
  switch (state) {
    case 'completed':
      return 'bg-B00 border-B00';
    case 'active':
      return 'border-B00';
    default:
      return 'bg-A80 border-A80';
  }
};

export const StepDot: React.FC<StepDotPropTypes> = ({ state }) => {
  const borderColor = getBorderClass(state);
  return (
    <div className={cn(
      'w-3 h-3 rounded-full m-x-1 flex-none border-[2px]', 
      borderColor
    )} />
  );
}