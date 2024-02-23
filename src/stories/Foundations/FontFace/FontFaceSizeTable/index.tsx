import React from 'react';
import { SimpleTable } from '../../../../sbComponents';
import { DATA } from '../data';

export const FontFaceSizeTable = () => (
  <SimpleTable maxWidth="screen-sm">
    {DATA.fontSize.map((item: Record<string, string>) => (
      <React.Fragment>
        {Object.keys(item).map(fontSizeItem => (
          <span className="font-neue-montreal font-light">{item[fontSizeItem]}</span>
        ))}
      </React.Fragment>
    ))}
  </SimpleTable>
);