import React from 'react';

// Components
import { SideBarDesktop } from './SideBarDesktop';
import { SideBarTablet } from './SideBarTablet';
import { SideBarMobile } from './SideBarMobile';
import { SideBarProvider } from './SideBarProvider';

// Types
import { SideBarPropTypes } from './types';

const SIDEBAR = [{
  alias: 'desktop',
  component: SideBarDesktop,
  classStr: 'lg:block hidden'
}, {
  alias: 'tablet',
  component: SideBarTablet,
  classStr: 'hidden lg:hidden sm:block'
}, {
  alias: 'mobile',
  component: SideBarMobile,
  classStr: 'block sm:hidden md:hidden lg:hidden'
}]

/**
 * Main Sidebar component that assembles the sidebar's structure and handles its dynamic behavior.
 */
export const SideBar: React.FC<SideBarPropTypes> = ({
  beforeDeviderList,
  afterDeviderList,
  extraList,
}) => (
  <React.Fragment>
    {SIDEBAR.map(item => {
      const ComSideBar = item.component;
      return (
        <div key={item.alias} className={item.classStr}>
          <SideBarProvider>
            <ComSideBar 
              beforeDeviderList={beforeDeviderList}
              afterDeviderList={afterDeviderList}
              extraList={extraList}
            />
          </SideBarProvider>
        </div>
      );
    })}
  </React.Fragment>
);