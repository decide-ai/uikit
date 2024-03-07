import Ract from 'react';
import cn from 'classnames';
import { CirclePropTypes } from '../types';

/**
 * Returns the appropriate border class based on the line's visibility, state, and type.
 */
const getCircleClass = (
  state: string | undefined,
) => {
  // Return border classes based on the current state.
  switch (state) {
    case 'completed':
      return 'border-B00 bg-B80';
    case 'active':
      return 'bg-B80 bg-white border-B00';
    default:
      return 'border-A80 bg-white';
  }
};

export const StepCircle: React.FC<CirclePropTypes> = ({ state, children }) => {
  const circleColor = getCircleClass(state);
  return (
    <div className={cn(
      'flex items-center justify-center rounded-full flex-shrink-0 border-[1px] w-10 h-10',
      circleColor
    )}>
      {children}
    </div>
  );
}