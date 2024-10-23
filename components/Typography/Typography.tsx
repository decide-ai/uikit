import React from 'react';
import cn from 'classnames';
import { TypographyProps } from './types';
import { getColorByName } from '../index';
import { 
  ADAPTIVE_SIZE_MAP, 
  REGULAR_SIZE_MAP,
  VW_SIZE_MAP,
} from './typographyClassMap';

/**
 * Typography component for displaying text using predefined styles and configurations.
 */
export const Typography: React.FC<TypographyProps> = ({
  tagName = 'div',
  children,
  size = 'base',
  weight = 'normal',
  adaptive,
  responsiveVW,
  textAlign,
  textTransform = 'normalCase',
  style = 'normal',
  color = 'A00',
  truncate,
  htmlFor,
  whitespaceNowrap,
}) => {
  /**
   * Convert string to JSX tag.
   */
  const Tag = tagName as keyof JSX.IntrinsicElements;

  /**
   * Determine size class based on 'adaptive' prop.
   */
  const sizeClass = responsiveVW
    ? VW_SIZE_MAP[size]
    : adaptive
      ? ADAPTIVE_SIZE_MAP[size]
      : REGULAR_SIZE_MAP[size];

  /**
   * Get the text color.
   */
  const getColor = getColorByName(color);
  return (
    <Tag
      className={cn(
        sizeClass, 
        `${style} ${getColor?.text}`, 
        'font-neue-montreal',
        {
          'whitespace-nowrap': whitespaceNowrap,
          'truncate block': truncate,
          'inline-block': !truncate,
          'font-light': weight === 'light',
          'font-normal': weight === 'normal',
          'font-medium': weight === 'medium',
          'font-bold': weight === 'bold',

          'text-left': textAlign === 'left',
          'text-right': textAlign === 'right',
          'text-center': textAlign === 'center',
          'text-justify': textAlign === 'justify',

          'uppercase': textTransform === 'uppercase',
          'lowercase': textTransform === 'lowercase',
          'capitalize': textTransform === 'capitalize',
          'normal-case': textTransform === 'normalCase',
        }
      )}
      htmlFor={htmlFor}
    >
      {children}
    </Tag>
  );
}