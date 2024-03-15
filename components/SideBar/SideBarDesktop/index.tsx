import React, { useContext } from 'react';
import cn from 'classnames';

// Components
import { ModClubLogo } from '../ModClubLogo';
import { SideBarItem } from '../SideBarItem';
import { SideBarContext } from '../SideBarProvider';
import { Devider } from '../Devider';
import { Wrapper } from './Wrapper';
import { MapWrapper } from './MapWrapper';

// Types
import { SideBarPropTypes } from '../types';

/**
 * Desktop Sidebar component that assembles the sidebar's 
 * structure and handles its dynamic behavior.
 */
export const SideBarDesktop: React.FC<SideBarPropTypes> = ({
  beforeDeviderList,
  afterDeviderList,
  extraList,
}) => {
  const { 
    isExpanded, 
    toggleExpanded,
  } = useContext(SideBarContext);
  const expandedIconName = isExpanded ? "DoubleAltArrowRightIcon" : "DoubleAltArrowLeftIcon";
  return (
    <Wrapper>
      <div>
        <div className='pb-4 pt-2'>
          <ModClubLogo isLess={isExpanded} />
        </div>
        
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

      <div>
        {extraList && (
          <MapWrapper itemsList={extraList} />
        )}
        <SideBarItem 
          iconName={expandedIconName}
          text="Hide Sidebar"
          onClick={toggleExpanded}
        />
      </div>
    </Wrapper>
  );
}