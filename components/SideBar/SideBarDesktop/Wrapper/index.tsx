import React, { useContext } from 'react';
import cn from 'classnames';
import { ChildrenNodePropTypes } from '../../types';
import { SideBarContext } from '../../SideBarProvider';

export const Wrapper: React.FC<ChildrenNodePropTypes> = ({ 
  children,
}) => {
  const { 
    isExpanded,
  } = useContext(SideBarContext);
  return (
    <div 
      className={cn(
        'flex flex-col justify-between gap-12',
        'max-w-60 h-full p-2',
        'border-r-[1px] border-r-A100', 
        `transition-all bg-white overflow-hidden`,
        {
          'w-full': !isExpanded,
          'w-14': isExpanded,
      })}
      style={{ 
        transitionProperty: 'width'
      }}
    >
      {children}
    </div>
  );
}