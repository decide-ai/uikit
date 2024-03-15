import React, { useContext } from 'react';
import cn from 'classnames';

// Components
import { ButtonIcon } from '../../index';
import { ModClubLogo } from '../ModClubLogo';
import { SideBarContext } from '../SideBarProvider';
import { MapWrapper } from './MapWrapper';
import { Devider } from '../Devider';

// Types
import { SideBarPropTypes } from '../types';

export const SideBarMobile: React.FC<SideBarPropTypes> = ({
  beforeDeviderList,
  afterDeviderList,
  extraList,
}) => {
  const { 
    isExpanded, 
    toggleExpanded,
  } = useContext(SideBarContext);
  const expandedIconName = isExpanded ? "CrossIcon" : "HamburgerMenuIcon";
  return (
    <div className={cn(
      'fixed z-index-10 top-0 left-0 w-full'
    )}>
      <div className={cn(
        'relative z-index-10',
        'flex items-center justify-between', 
        'p-3 border-b-[1px] border-b-A100'
      )}>
        <ModClubLogo />
        <ButtonIcon 
          iconName={expandedIconName}
          onClick={toggleExpanded}
        />
      </div>

      <div className={cn(
        'fixed top-[48px] left-0 right-0 bottom-0',
        'flex flex-col justify-between',
        'w-full p-3',
        'bg-white',
        {
          'hidden': !isExpanded,
        }
      )}>
        <div>
          {beforeDeviderList && (
            <MapWrapper itemsList={beforeDeviderList} />
          )}

          {afterDeviderList && (
            <React.Fragment>
              <Devider />
              <MapWrapper itemsList={afterDeviderList} />
            </React.Fragment>
          )}
        </div>

        {extraList && (
          <MapWrapper itemsList={extraList} />
        )}
      </div>
    </div>
  );
}