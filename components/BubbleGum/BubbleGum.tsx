import React from 'react';

// Components
import { FloatingElement } from './FloatingElement';
import { BubbleGumProvider, useBubbleGum } from './BubbleGumContext';

// Types / Context, etc ...
import { BubbleGumPropTypes } from './types';

/**
 * A component that displays floating UI elements such as tooltips or popovers.
 */
const BubbleGumComponent: React.FC<BubbleGumPropTypes> = ({ 
  children,
  text,
  hide,
  skin = 'grey',
  className,
}) => {
  const { getReferenceProps, refs, isOpen } = useBubbleGum();
  return (
    <React.Fragment>
      <div
        className={className}
        ref={refs.setReference} 
        {...getReferenceProps()}
      >
        {children}
      </div>

      {(isOpen && !hide) && (
        <FloatingElement 
          text={text} 
          skin={skin} 
        />
      )}
    </React.Fragment>
  );
}

export const BubbleGum: React.FC<BubbleGumPropTypes> = (props) => (
  <BubbleGumProvider>
    <BubbleGumComponent {...props} />
  </BubbleGumProvider>
)