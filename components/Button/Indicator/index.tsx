import React from 'react';
import cn from 'classnames';
import { IndicatorTypes } from '../types';

const INDICATOR_COLORS = {
  red: 'bg-D00',
  green: 'bg-B00',
  grey: 'bg-A50',
  yellow: 'bg-E00'
};

/**
 * Used to display a dot with a background on the left side of the button text, 
 * indicating various interface activities such as rejection or acceptance.
 */
export const Indicator: React.FC<IndicatorTypes> = ({ 
  indicator,
  disabled
}) => {
  let indicatorColor = indicator && INDICATOR_COLORS[indicator];
  if (disabled) indicatorColor = INDICATOR_COLORS.grey;

  return (
    <span className={cn(
      indicatorColor, 'mr-1 w-2 h-2 inline-block rounded-full'
    )}/>
  );
}