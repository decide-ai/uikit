import React from 'react';
import cn from 'classnames';

// Components
import { Typography, ButtonIcon, QuestionCircleIcon, getColorByName } from '../../../index';
import { ItemWrap } from '../ItemWrap';
import { GridWrap } from '../GridWrap';

// Types / Styles and etc.
import { TableHeaderPropTypes } from '../../types';

export const Header: React.FC<TableHeaderPropTypes> = ({ 
  rowVerticalSpace,
  truncate,
  columns,
}) => (
  <GridWrap
    rowVerticalSpace={rowVerticalSpace}
    className={cn(
      'font-bold bg-white border-[1px] border-A100 border-dashed'
    )}
  >
    {columns.map((column, index) => (
      <ItemWrap
        key={index}
        align={column.align}
      >
        <Typography 
          size="sm" 
          truncate={truncate}
        >
          {column.title}
        </Typography>

        {column?.onSortClick && (
          <ButtonIcon 
            onClick={column.onSortClick}
            iconName={column.sortIconName || 'SortVerticalIcon'}
          />
        )}

        {column?.infoTooltipProps && (
          <QuestionCircleIcon 
            stroke={getColorByName('A00')?.hex}
            className='ml-2'
          />
        )}
      </ItemWrap>
    ))}
  </GridWrap>
);