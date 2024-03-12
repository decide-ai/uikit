import React from 'react';
import { ClockCircleIcon, getColorByName, Typography } from '../../index';
import { SubmittedDateTimerPropTypes } from '../types';

export const SubmittedDateTimer: React.FC<SubmittedDateTimerPropTypes> = ({ 
  dateTimeText, 
  dateTime 
}) => {
  const dateString = dateTimeText || '';
  return (
    <div className='flex items-center justify-center gap-1'>
      <ClockCircleIcon 
        size={16}
        strokeWidth={1.5}
        stroke={getColorByName('A00')?.hex}
      />
        <Typography size="sm">{`${dateString} ${dateTime}`}</Typography>
    </div>
  );
}