import React, { useContext } from 'react';
import cn from 'classnames';

// Components
import { getColorByName, DynamicIcon } from '../../index';
import { TextInputContext } from '../TextInputContext';

// Types
import { IconWrapPropTypes } from '../types';

export const IconWrap: React.FC<IconWrapPropTypes> = ({ iconName }) => {
  const { 
    checked, 
    isError,
    them,
  } = useContext(TextInputContext);
  
  // Get color for icon container background;
  const skinClassName = checked 
    ? 'bg-B90 border-B90' : isError 
    ? 'bg-D90 border-D90' : 'border-C00 bg-C00';

  // Get color for icon;
  const iconColorName = checked 
    ? 'B00' : isError 
    ? 'D00' : them === 'darkGreen' ? 'A00' : 'F00';

  return (
    <div className={cn(
      'border-solid border-[1px] rounded-[6px] cursor-pointer p-0.5',
      skinClassName
    )}>
      <DynamicIcon 
        iconName={iconName}
        stroke={getColorByName(iconColorName)?.hex}
      />
    </div>
  );
}