import React from 'react';
import { Drawer } from '../../index';
import { WrapperPropTypes } from '../types';

export const Wrapper: React.FC<WrapperPropTypes> = ({ 
  status, 
  children,
  href,
  hrefTarget,
}) => {
  const skin = status === 'active' ? 'green' : 'standard';
  return (
    <Drawer skin={skin}>
      <div className='w-full flex flex-col gap-3 relative'>
        {href && (
          <a 
            href={href}
            target={hrefTarget}
            className='absolute top-0 left-0 right-0 bottom-0 w-full h-full'
          />
        )}
        
        {children}
      </div>
    </Drawer>
  );
}