import React from 'react';
import { Typography, getColorByName, DynamicIcon } from '../../index';
import { HeadingPropTypes } from '../types';

export const StatHeader: React.FC<HeadingPropTypes> = ({ tooltip, iconName, label }) => {
  const iconHexColor = getColorByName('A00')?.hex;
  const iconClasses = "md:w-5 md:h-5 w-4 h-4";
  return (
    <div className="flex justify-between gap-2">
      <div className="flex gap-1.5 items-center">
        <DynamicIcon 
          iconName={iconName}
          className={iconClasses}
          stroke={iconHexColor}
        />
        <Typography 
          size="sm" 
          adaptive
        >
          {label}
        </Typography>
      </div>

      {tooltip && (
        <DynamicIcon 
          iconName="QuestionCircleIcon"
          className={iconClasses}
          stroke={iconHexColor}
        />
      )}
    </div>
  );
}