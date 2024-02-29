import React from 'react';
import { DynamicIcon, Typography } from '../index';
import { IconTextPropsTypes } from './types';

/**
 * A component that displays an icon alongside text.
 * This component is useful for displaying a piece of text with a visual icon.
 * This component can use all icons from icons-lib.
 */
export const IconText: React.FC<IconTextPropsTypes> = ({
  iconName,
  text,
  iconSize = 24,
  textSize = 'sm',
  iconStroke = "#1B4444",
  textColor = 'A00',
}) => {
  /** If the requred prop is not obtained, return null */
  if (!text || !iconName) {
    console.error(`IconText does not have props: text or iconName.`);
    return null;
  }

  return (
    <div className='flex justify-center items-center'>
      <DynamicIcon 
        iconName={iconName}
        stroke={iconStroke}
        size={iconSize}
        className='mr-1.5'
      />
      <Typography
        size={textSize}
        color={textColor}
      >
        {text}
      </Typography>
    </div>
  );
}