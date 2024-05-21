import React from 'react';
import cn from 'classnames';

// Components
import { DynamicIcon, Typography, getColorByName } from '../index';

// Types
import { FeedbackAlertPropTypes } from './types';

// Styles
import { skinStyles } from './styles';

export const FeedbackAlert: React.FC<FeedbackAlertPropTypes> = ({
  iconName = 'DangerCircleIcon',
  text,
  skin = 'green',
  children,
}) => {
  /** 
   * Check for the existence of the required text prop
   */
  if (!text) {
    console.error(`Prop text in FeedbackAlert component does not exist.`);
    return null;
  }

  // Determines the background color based on the skin prop
  const bgColor = getColorByName(skinStyles[skin])?.bg;
  // Sets the content color based on the skin type; darkGreen has a different text color
  const contentColor = skin === 'darkGreen' ? 'C100' : 'A00';

  return (
    <div className={cn(bgColor, 'flex items-center justify-center gap-3 p-3 sm:p-4 rounded-lg')}>
      <DynamicIcon 
        iconName={iconName}
        stroke={getColorByName(contentColor)?.hex}
        className="flex-shrink-0"
        strokeWidth={1.4}
      />
      <Typography 
        size="sm" 
        adaptive
        color={contentColor}
      >
        {text}
      </Typography>
      {children}
    </div>
  );
}