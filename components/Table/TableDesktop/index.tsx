import React from 'react';

// Components
import { TableStub } from '../TableStub';
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
  stubSubTitle,
  stubTitle,
}) => (
  <React.Fragment>
    <Header 
      rowVerticalSpace={rowVerticalSpace}
      columns={columns}
      truncate={truncate}
    />

    {!records.length && (
      <TableStub 
        stubSubTitle={stubSubTitle}
        stubTitle={stubTitle}
      />
    )}

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