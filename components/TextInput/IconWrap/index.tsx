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
    theme,
  } = useContext(TextInputContext);

  const chackedClasses = {
    darkGreen: 'bg-B90 border-B90',
    black: 'bg-B90 border-B90',
    blue: 'bg-G80 border-G80',
    lightGreen: 'bg-B90 border-B90',
    lavender: 'bg-H90 border-H90',
  };

  const iconColor = {
    darkGreen: 'A00',
    black: 'F00',
    blue: 'G00',
    lightGreen: 'B00',
    lavender: 'H00',
  }
  
  // Get color for icon container background;
  const skinClassName = checked 
    ? chackedClasses[theme || 'darkGreen'] : isError 
    ? 'bg-D90 border-D90' : 'border-C00 bg-C00';

  // Get color for icon;
  const iconColorName = checked 
    ? iconColor[theme || 'darkGreen'] : isError 
    ? 'D00' : theme === 'darkGreen' ? 'A00' : 'F00';

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