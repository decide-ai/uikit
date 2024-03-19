import React from 'react';

// Components
import { Header } from './Header';
import { Row } from './Row';

// Types / Styles
import { TablePropTypes } from '../types';

export const TableDesktop: React.FC<TablePropTypes> = ({ 
  rowVerticalSpace = 'medium',
  highlightedRows,
  truncate,
  records,
  columns,
}) => (
  <React.Fragment>
    <Header 
      rowVerticalSpace={rowVerticalSpace}
      columns={columns}
      truncate={truncate}
    />

    {records.map((record, index) => (
      <Row 
        key={index}
        rowIndex={index}
        record={record}
        columns={columns}
        highlightedRows={highlightedRows}
        rowVerticalSpace={rowVerticalSpace}
        truncate={truncate}
      />
    ))}
  </React.Fragment>
);