import React, { useEffect } from 'react';
import cn from 'classnames';
import { Typography, IconText } from '../index';
import { useTimer } from './timerHook';
import { TimerProps } from './types';
import { formattedTime } from './formattedTime';

const EXPIRED_TEXT = 'Reservation expires';

/**
 * Timer component provides a countdown functionality based on provided duration in minutes.
 */
export const Timer: React.FC<TimerProps> = ({ 
  durationMinutes = 0, 
  deadline = 0, 
  freeze = false, 
  expiredText = EXPIRED_TEXT,
  position = 'start',
  callback,
}) => {
  const { 
    secondsLeft, 
    isExpired,
    isExpiredLimit
  } = useTimer(
    durationMinutes, 
    deadline, 
    freeze
  );

  if (!durationMinutes) {
    console.log('Timer should have the prop: derationMinutes')
    return null;
  }

  useEffect(() => {
    if (isExpired) {
      callback?.('expired');
      console.log('Time expired');
    }
  }, [isExpired]);

  return (
    <div className={cn('flex flex-col gap-0', {
      'items-center': position === 'center',
      'items-start': position === 'start'
    })}>
      <IconText 
        iconName="StopwatchIcon"
        textSize="sm"
        text={formattedTime(secondsLeft)}
        iconSize={16}
        iconStrokeWidth={1.5}
      />
      <Typography 
        size="xs" 
        color={isExpiredLimit ? 'D00' : 'B00'}
      >
        {expiredText}
      </Typography>
    </div>
  );
}