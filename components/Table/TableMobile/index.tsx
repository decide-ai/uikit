import React from 'react';
import cn from 'classnames';

// Components
import { Button, Typography, QuestionCircleIcon, getColorByName } from '../../index';
import { ItemWrap } from './ItemWrap';

// Types / Styles
import { TablePropTypes } from '../types';

export const TableMobile: React.FC<TablePropTypes> = ({
  highlightedRows,
  records,
  columns,
}) => (
  <div className='flex flex-col gap-3'>
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
                    <QuestionCircleIcon 
                      stroke={getColorByName('A00')?.hex}
                      size={22}
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