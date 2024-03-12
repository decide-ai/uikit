import React from 'react';
import { DynamicIcon, Typography } from '../index';
import { IconTextPropsTypes } from './types';
import { getColorByName } from '../index';

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
  iconStroke = 'A00',
  textColor = 'A00',
  iconStrokeWidth = 1.2
}) => {
  /** If the requred prop is not obtained, return null */
  if (!text || !iconName) {
    console.error(`IconText does not have props: text or iconName.`);
    return null;
  }

  /**
   * Get svg icon stroke color in hex
   */
  const getIconStrokeHex = getColorByName(iconStroke);

  return (
    <div className='flex justify-center items-center'>
      <DynamicIcon 
        iconName={iconName}
        stroke={getIconStrokeHex?.hex}
        strokeWidth={iconStrokeWidth}
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