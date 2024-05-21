import React from 'react';
import cn from 'classnames';

// Components
import { ScrollContainer, Typography, ButtonIcon } from '../index';

// Types
import { FiltersPropTypes } from './types';


/**
 * The Filters component is designed to display a section for filters or sorting options
 * within a UI. It supports an optional label, custom content (filters) within a scrolling
 * container, and a sortable functionality represented by a sort button.
 * 
 * The component leverages the `ScrollContainer` to provide a scrollable area for the filters,
 * making it suitable for interfaces with limited space. It uses the `Typography` component for labels
 * and the `ButtonIcon` for the sort button, ensuring consistent styling across the application.
 */
export const Filters: React.FC<FiltersPropTypes> = ({ 
  label,
  children,
  onSortClick,
  sortName = 'Sort',
  sortOnlyMobile,
}) => (
  <div className='flex flex-col gap-0.5'>
    {(label || onSortClick) && (
      <div className='flex items-center justify-between'>
        {label && (
          <Typography size="sm">
            {label}
          </Typography>
        )}

        {onSortClick && (
          <div className={cn('flex items-center gap-1', {
            'md:hidden': sortOnlyMobile,
          })}>
            <Typography size="sm">{sortName}</Typography>
            <ButtonIcon 
              iconName='SortVerticalIcon' 
              onClick={onSortClick}
            />
          </div>
        )}
      </div>
    )}

    <ScrollContainer>
      {React.Children.toArray(children).map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </ScrollContainer>
  </div>
);