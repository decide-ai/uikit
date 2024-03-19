import React from 'react';
import cn from 'classnames';

// Components
import { Typography, Button } from '../../../index';
import { ItemWrap } from '../ItemWrap';
import { GridWrap } from '../GridWrap';

// Types / Styles and etc.
import { TableRowPropsTypes } from '../../types';

// TODO: Need to add Tooltip to column
export const Row: React.FC<TableRowPropsTypes> = (props) => {
  const { columns, record, truncate } = props;
  return (
    <GridWrap {...props}>
      {columns.map((column, columnIndex) => (
        <ItemWrap 
          key={columnIndex}
          align={column.align}
        >
          <React.Fragment>
            {column.isShowButton ? (
              <Button 
                buttonText={`${column.render(record)}`}
                onClick={() => record} 
                size="tiny" 
                skin="inlineGrey" 
              />
            ) : (
              <Typography 
                truncate={truncate} 
                size="sm"
              >
                {column.render(record)}
              </Typography>
            )}

            {columnIndex === 0 && record.additionalComponent && (
              <div className='ml-2'>
                {record.additionalComponent}
              </div>
            )}
          </React.Fragment>
        </ItemWrap>
      ))}
    </GridWrap>
  );
}