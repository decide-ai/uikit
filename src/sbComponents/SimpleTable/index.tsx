import React from 'react';
import cn from 'classnames';
import { TableProps, SimpleTableProps } from '../types';
import { Typography } from '../../../components';

export const Table: React.FC<TableProps> = ({ 
  children,
  maxWidth = 'none',
}) => (
  <ul className={cn({
    'max-w-xl': maxWidth === 'xl',
    'max-w-2xl': maxWidth === '2xl',
    'max-w-3xl': maxWidth === '3xl',
    'max-w-4xl': maxWidth === '4xl',
    'max-w-5xl': maxWidth === '5xl',
    'max-w-6xl': maxWidth === '6xl',
    'max-w-7xl': maxWidth === '7xl',
    'max-w-full': maxWidth === 'full',
    'max-w-screen-sm': maxWidth === 'screen-sm',
    'max-w-screen-md': maxWidth === 'screen-md',
    'max-w-screen-lg': maxWidth === 'screen-lg',
    'max-w-none': maxWidth === 'none',
  })}>
    {React.Children.toArray(children).map((item, index) => (
      <li 
        key={index}
        className={cn(
          'p-4',
          'flex justify-between',
          'rounded-md', 
          { 'bg-C00': (index % 2 === 1) }
        )}
      >
        {item}
      </li>
    ))}
  </ul>
);

export const SimpleTable: React.FC<SimpleTableProps> = ({ 
  tableList, 
  maxWidth 
}) => (
  <Table maxWidth={maxWidth}>
    {tableList.map((item, index: number)  => (
      <React.Fragment>
        {Object.keys(item).map((tableItem: string, itemIndex: number) => (
          <Typography size="sm" weight="light" key={itemIndex}>
            <span dangerouslySetInnerHTML={{ __html: item[tableItem] }} />
          </Typography>
        ))}
      </React.Fragment>
    ))}
  </Table>
);