import React from 'react';
import cn from 'classnames';

// Components
import { Typography } from '../../index';

// Types / Contenxt, and etc ...
import { FloatingElementPropTypes } from '../types';
import { useBubbleGum } from '../BubbleGumContext';

const SKIN_CLASSES = {
  inline: 'bg-white border-solid border-[1px] border-A80',
  grey: 'bg-C50',
  light: 'bg-B90',
  dark: 'bg-A00',
  lavender: 'bg-H00'
}

/**
 * The component that is displayed as a floating element anchored to the trigger element.
 */
export const FloatingElement: React.FC<FloatingElementPropTypes> = ({ 
  skin, 
  text 
}) => {
  const { getFloatingProps, floatingStyles, refs } = useBubbleGum();
  const textColor = skin === 'dark' ? 'C100' : skin === 'lavender' ? 'H110' : 'A00';
  return (
    <div
      className={cn(
        'floating rounded-lg max-w-40 py-2 px-4',
        skin && SKIN_CLASSES[skin]
      )}
      ref={refs.setFloating}
      style={floatingStyles}
      {...getFloatingProps()}
    >
      <Typography 
        size="sm"
        color={textColor}
      >
        {text}
      </Typography>
    </div>
  );
}