import React from 'react';
import cn from 'classnames';

// Components
import { ModClubLogo } from '../ModClubLogo';
import { MapWrapper } from './MapWrapper';

// Types
import { SideBarPropTypes } from '../types';

/**
 * Tablet Sidebar component.
 */
export const SideBarTablet: React.FC<SideBarPropTypes> = ({
  beforeDeviderList,
  afterDeviderList,
  extraList,
}) => {
  let list = [];
  if (afterDeviderList && afterDeviderList.length) list.push(...afterDeviderList);
  if (extraList && extraList.length) list.push(...extraList);
  return (
    <div className='flex justify-between items-center px-3 py-2 rounded-lg bg-white border-b-A100'>
      <ModClubLogo />
      <div className='flex flex-row items-center'>
        {beforeDeviderList && (
          <MapWrapper itemsList={beforeDeviderList} />
        )}

        {list.length && (
          <React.Fragment>
            <div className={cn(
              'w-[1px] h-10 mx-1',
              'border-r-[1px] border-dashed border-r-A100'
            )} />
            <MapWrapper 
              itemsList={list} 
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}