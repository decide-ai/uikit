import React from 'react';
import cn from 'classnames';
import { Typography, getColorByName } from '../index';
import { IndicatorColorTypes, IndicatorTextPropTypes } from './types';

const INDICATOR_COLORS: IndicatorColorTypes = {
  red: 'D00',
  green: 'B00',
  grey: 'A50',
  yellow: 'E00'
};

/**
 * A component that displays a piece of text with an optional colored indicator circle before it.
 * Useful for showing statuses, tags, or categories next to textual content.
 * A React component that renders a text with an optional indicator.
 */
export const IndicatorText: React.FC<IndicatorTextPropTypes> = ({
  text,
  indicator,
  textSize = 'sm',
  textColor = 'A00',
}) => {
  /** 
   * If the requred prop is not obtained, return null 
   */
  if (!text) {
    console.error(`IndicatorText does not have prop: text.`);
    return null;
  }

  /**
   * Get inicator color.
   */
  let indicatorColor = null;
  if (indicator) {
    let colorName = INDICATOR_COLORS[indicator];
    indicatorColor = getColorByName(colorName);
  }
  
  return (
    <div className='flex items-center justify-center'>
      {indicator && (
        <span className={cn(
          indicatorColor?.bg, 'mr-1 w-2 h-2 inline-block rounded-full'
        )}/>
      )}
      <Typography
        size={textSize}
        color={textColor}
      >
        {text}
      </Typography>
    </div>
  );
}