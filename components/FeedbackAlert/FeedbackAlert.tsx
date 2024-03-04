import React from 'react';
import cn from 'classnames';
import { DynamicIcon, Typography, getColorByName } from '../index';

type FeedbackAlertPropTypes = {
  /**
   * Optional icon name for the icon displayed in the alert
   */
  iconName?: string;

  /**
   * The main text message to be displayed in the alert
   */
  text: string;

  /**
   * Optional skin color for the alert background
   */
  skin?: 'green' | 'yellow' | 'red' | 'grey' | 'darkGreen',

  /**
   * Optional children to render additional elements inside the alert
   */
  children?: React.ReactNode;
}

/**
 * Defines styles for different skins using a mapping object
 */
const skinStyles: Record<string, string> = {
  green: 'B80',
  yellow: 'E00',
  red: 'D50',
  grey: 'C00',
  darkGreen: 'A00'
}

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