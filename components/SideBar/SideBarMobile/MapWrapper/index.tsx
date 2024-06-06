import React from 'react';

// Components
import { Typography, DynamicIcon, getColorByName } from '../../../index';

// Types
import { MapWrapperPropTypes } from '../../types';

/**
 * Component to map through lists of items and render theme.
 */
export const MapWrapper: React.FC<MapWrapperPropTypes> = ({ 
  itemsList,
}) => (
  <div className='flex flex-col gap-1 flex-row'>
    {itemsList.map(item => (
      <button className='p-2 w-full flex items-center justify-between'>
        <Typography size='base'>{item.text}</Typography>
        <DynamicIcon 
          iconName={item.iconName} 
          stroke={getColorByName('A00')?.hex}
          className='flex-shrink-0'
        />
      </button>
    ))}
  </div>
);