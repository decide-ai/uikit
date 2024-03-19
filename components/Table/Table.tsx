import React from 'react';

// Components
import { TableDesktop } from './TableDesktop';
import { TableMobile } from './TableMobile';

// Types / Styles and etc.
import { TablePropTypes } from './types';

const TABLE = [{
  alias: 'desktop',
  component: TableDesktop,
  classStr: 'sm:block hidden'
}, {
  alias: 'mobile',
  component: TableMobile,
  classStr: 'block sm:hidden'
}];

export const Table: React.FC<TablePropTypes> = (props) => (
  <div className="w-full">
    {TABLE.map((item, index) => {
      const ComTable = item.component;
      return (
        <div key={index} className={item.classStr}>
          <ComTable {...props} />
        </div>
      );
    })}
  </div>
);