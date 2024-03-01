import React from 'react';
import cn from 'classnames';
import { DynamicIcon, Typography, getColorByName } from '../index';
import { StubPropTypes } from './types';

/**
 * Displays a stub component with an icon and text.
 * This component is typically used to provide a visual message to the user.
 */
export const Stub: React.FC<StubPropTypes> = ({
  iconName,
  title,
  subTitle,
  iconStroke = 'A00',
}) => {
  /** 
   * Validates the presence of required props: iconName and title. Logs an error if they are missing.
   */
  if (!iconName && !title) {
    console.error(`
      Please ensure that the required parameters iconName and title are provided. 
      Review your component's props to resolve the issue.
    `);
    return null;
  }

  /** Retrieves the hexadecimal value of the icon stroke color */
  const iconStrokeColor = getColorByName(iconStroke)?.hex;

  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
      {/* Renders the icon with the specified name, stroke color, and additional properties. */}
      <DynamicIcon 
        iconName={iconName}
        stroke={iconStrokeColor}
        size={80}
        strokeWidth={0.7}
      />

      {/* Conditionally renders the title and subtitle, if provided. */}
      <div className="flex flex-col gap-1 text-center">
        {title && (
          <Typography size="2xl">{title}</Typography>
        )}

        {subTitle && (
          <Typography 
            size="sm"
            color="A50"
            weight="light"
          >{subTitle}</Typography>
        )}
      </div>
    </div>
  );
}