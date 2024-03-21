import React from 'react';
import { TooltipProvider, useTooltip } from './TooltipContext';

// Components
import { FloatingElement } from './FloatingElement';
import { ReferenceElement } from './ReferenceElement';

// Types
import { TooltipPropTypes } from './types';

const TooltipComponent: React.FC<TooltipPropTypes> = ({
  iconName = 'QuestionCircleIcon',
  size = 'large',
  text,
}) => {
  const { isOpen } = useTooltip();
  return (
    <React.Fragment>
      <ReferenceElement 
        iconName={iconName}
        size={size}
      />

      {isOpen && (
        <FloatingElement text={text} />
      )}
    </React.Fragment>
  );
}

export const Tooltip: React.FC<TooltipPropTypes> = (props) => (
  <TooltipProvider>
    <TooltipComponent {...props} />
  </TooltipProvider>
);