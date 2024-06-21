import React, { useContext } from 'react';
import cn from 'classnames';

// Components
import { TextInputContext } from '../TextInputContext';

// Types
import { ControlGroupWrapPropTypes } from '../types';

export const ControlGroupWrap: React.FC<ControlGroupWrapPropTypes> = ({ 
  children,
}) => {
  const { view } = useContext(TextInputContext);
  return (
    <div className={cn(
      'flex gap-1 px-1',
      'border-l-[1px] border-l-A100 border-dashed',
      'absolute right-0.5',
      'text-gray-500 hover:text-gray-700',
      {
        'items-center top-1/2 transform -translate-y-1/2': view === 'input',
        'flex-col py-1 top-1': view === 'textarea'
      }
    )}>
      {children}
    </div>
  );
}