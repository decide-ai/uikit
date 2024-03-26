import React from 'react';

// Components
import { Stub } from '../../index';

// Types
import { TableStublePropTypes } from '../types';

export const TableStub: React.FC<TableStublePropTypes> = ({ stubSubTitle, stubTitle }) => (
  <div className='px-3 py-8 flex items-center justify-center'>
    <div className='max-w-sm'>
      <Stub
        iconName="DangerCircleIcon"
        subTitle={stubSubTitle}
        title={stubTitle || 'Empty table'}
      />
    </div>
  </div>
);