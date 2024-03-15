import React from 'react';

// Components
import { SideBarItem } from '../../SideBarItem';

// Types
import { MapWrapperPropTypes } from '../../types';

/**
 * Component to map through lists of items and render them using SideBarItem component.
 */
export const MapWrapper: React.FC<MapWrapperPropTypes> = ({ 
  itemsList,
}) => (
  <div className='flex gap-1 flex-col'>
    {itemsList.map(item => (
      <SideBarItem 
        key={item.text} 
        text={item.text} 
        iconName={item.iconName} 
      />
    ))}
  </div>
);
