import React from 'react';
import { SideBarItem } from '../../SideBarItem';
import { MapWrapperPropTypes } from '../../types';

/**
 * Component to map through lists of items and render them using SideBarItem component.
 */
export const MapWrapper: React.FC<MapWrapperPropTypes> = ({ 
  itemsList,
}) => (
  <div className='flex gap-1 flex-row'>
    {itemsList.map(item => (
      <SideBarItem 
        key={item.text} 
        iconName={item.iconName} 
      />
    ))}
  </div>
);
