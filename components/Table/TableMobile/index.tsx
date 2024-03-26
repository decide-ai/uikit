import React from 'react';

// Components
import { Button, Typography, Tooltip } from '../../index';
import { ItemWrap } from './ItemWrap';
import { TableStub } from '../TableStub';

// Types / Styles
import { TablePropTypes } from '../types';

export const TableMobile: React.FC<TablePropTypes> = ({
  highlightedRows,
  records,
  columns,
  stubSubTitle,
  stubTitle,
}) => (
  <div className='flex flex-col gap-3'>
    {!records.length && (
      <TableStub 
        stubSubTitle={stubSubTitle}
        stubTitle={stubTitle}
      />
    )}

    {records.map((record, index) => (
      <ItemWrap 
        key={index}
        highlightedRows={highlightedRows}
        record={record}
      >
        {columns.map((column, columnIndex) => (
          <React.Fragment key={columnIndex}>
            {!column.isShowButton && (
              <div 
                className='flex items-center justify-between'
              >
                <div className='flex items-center gap-2'>
                  <Typography size="sm">
                    {column.title}
                  </Typography>

                  {column.infoTooltipProps && (
                    <Tooltip 
                      text={column.infoTooltipProps} 
                      size="medium" 
                    />
                  )}
                </div>

                <Typography size="sm">
                  {column.render(record)}
                </Typography>
              </div>
            )}

            {columnIndex === (columns.length - 1) 
            && record.additionalComponent 
            && (record.additionalComponent)}

            {column.isShowButton && (
              <div className='pt-3 mt-3 border-t-[1px] border-t-A100 border-dashed'>
                <Button
                  buttonText={`${record.buttonText}`}
                  onClick={() => record}
                  size="tiny"
                  fullWidth
                  skin="inlineGrey"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </ItemWrap>
    ))}
  </div>
);