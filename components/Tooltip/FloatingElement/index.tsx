import React from 'react';
import { FloatingArrow } from "@floating-ui/react";
import { useTooltip } from '../TooltipContext';

// Components
import { getColorByName, Typography } from '../../index';

// Types
import { FloatingElementPropTypes } from '../types';

export const FloatingElement: React.FC<FloatingElementPropTypes> = ({ 
  text 
}) => {
  const {
    floatingStyles, 
    getFloatingProps, 
    refs, 
    arrowRef, 
    context 
  } = useTooltip();

  return (
    <div
      className="floating bg-C70 rounded-lg max-w-40 p-3"
      ref={refs.setFloating}
      style={floatingStyles}
      {...getFloatingProps()}
    >
      <FloatingArrow 
        ref={arrowRef} 
        context={context} 
        fill={getColorByName('C70')?.hex}
      />
      <Typography size="sm">
        {text}
      </Typography>
    </div>
  );
}