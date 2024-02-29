import React from 'react';
import cn from 'classnames';
import { IndicatorTypes, IndicatorStyleTypes } from '../types';
import { getColorByName } from '../../index';

const INDICATOR_COLORS: IndicatorStyleTypes = {
  red: 'D00',
  green: 'B00',
  grey: 'A50',
  yellow: 'E00'
};

/**
 * Used to display a dot with a background on the left side of the button text, 
 * indicating various interface activities such as rejection or acceptance.
 */
export const Indicator: React.FC<IndicatorTypes> = ({ 
  indicator,
  disabled
}) => {
  if (!indicator) return null;

  const colorName = INDICATOR_COLORS[indicator];
  const getColor = disabled ? 
    getColorByName(INDICATOR_COLORS.grey) : getColorByName(colorName);

  return (
    <span className={cn(
      getColor?.bg, 'mr-1 w-2 h-2 inline-block rounded-full'
    )}/>
  );
}