import React from 'react';
import cn from 'classnames';

// Components
import { DynamicIcon, getColorByName } from '../../index';

// Types / Context, etc ...
import { ReferenceElementPropTypes } from '../types';
import { useTooltip } from '../TooltipContext';

const TOOLTIP_SIZE_SET = {
  large: 24,
  medium: 22,
  small: 18,
}

export const ReferenceElement: React.FC<ReferenceElementPropTypes> = ({ 
  iconName, 
  size,
}) => {
  const { getReferenceProps, refs } = useTooltip();
  return (
    <div 
      ref={refs.setReference} 
      {...getReferenceProps()}
      className={cn(
        'border-transparent hover:border-B90 hover:bg-B90',
        'border-solid border-[1px] rounded-[6px] cursor-pointer p-0.5'
      )}
    >
      {iconName && (
        <DynamicIcon 
          iconName={iconName}
          stroke={getColorByName('A00')?.hex}
          size={TOOLTIP_SIZE_SET[size]}
          viewBox="0 0 22 22"
        />
      )}
    </div>
  ); 
}