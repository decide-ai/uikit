import React, { createContext, useContext, useRef, useState } from 'react';
import { useFloating, useHover, useFocus, useDismiss, useInteractions, offset, shift, autoPlacement, arrow } from '@floating-ui/react';

// Types
import { TooltipContenxtPropTypes } from '../types';

const TooltipContext = createContext<any>(null);
export const useTooltip = () => useContext(TooltipContext);

// Provider component
export const TooltipProvider: React.FC<TooltipContenxtPropTypes> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      shift(), 
      offset(10), 
      autoPlacement(), 
      arrow({ 
        element: arrowRef 
      })
    ],
    placement: 'left',
  });

  const hover = useHover(context);
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  
  const { 
    getReferenceProps, 
    getFloatingProps
  } = useInteractions([hover, focus, dismiss]);

  const value = {
    isOpen,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    refs,
    arrowRef,
    context,
  };

  return (
    <TooltipContext.Provider value={value}>
      {children}
    </TooltipContext.Provider>
  );
};
