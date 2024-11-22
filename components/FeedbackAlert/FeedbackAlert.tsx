import React from 'react';
import cn from 'classnames';

// Components
import { DynamicIcon, Typography, getColorByName, getIconsMap } from '../index';

// Types
import { FeedbackAlertPropTypes } from './types';

// Styles
import { skinStyles } from './styles';

export const FeedbackAlert: React.FC<FeedbackAlertPropTypes> = ({
  iconName = 'DangerCircleIcon',
  text,
  title,
  skin = 'green',
  iconBackground,
  textColor,
  iconColor,
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
  const contentColor = textColor 
    ? textColor : skin === 'darkGreen' || skin === 'black' ? 'C100' : 'A00';

  const iconData = getIconsMap().get(iconName);
  const iconType = iconData?.type;

  return (
    <div className={cn(bgColor, 
      'flex flex-col gap-4 items-start justify-center',
      'md:flex-row md:items-center sm:p-4 ',
      'p-3 rounded-lg',
    )}>
      <div className='flex gap-3 items-center justify-center'>
        <div className={cn(iconBackground && getColorByName(iconBackground)?.bg, {
          'p-2 rounded-full flex items-center justify-center': iconBackground, 
        })}>
          <DynamicIcon 
            iconName={iconName}
            className={cn("flex-shrink-0", 
              getColorByName(iconColor || contentColor)?.text, {
              'fill-current': iconType === 'fill',
              'stroke-current': iconType === 'stroke',
              }
            )}
          />
        </div>
        <div className='flex flex-col gap-1'>
          {title && (
            <Typography 
              size="base" 
              weight='bold'
              color={contentColor}
            >
              {title}
            </Typography>
          )}

          <Typography 
            size="sm" 
            color={contentColor}
          >
            {text}
          </Typography>
        </div>
      </div>
      {children}
    </div>
  );
}