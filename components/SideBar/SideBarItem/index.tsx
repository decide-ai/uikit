import React, { useContext } from 'react';
import cn from 'classnames';
import { Typography, DynamicIcon, getColorByName, BubbleGum } from '../../index';
import { ItemsPropTypes } from '../types';
import { SideBarContext } from '../SideBarProvider';

/**
 * Component to render each item in the sidebar. 
 * Includes logic for expanding or collapsing the sidebar.
 */
export const SideBarItem: React.FC<ItemsPropTypes> = ({ 
  text, 
  iconName, 
  onClick, 
}) => {
  const { 
    isExpanded,
  } = useContext(SideBarContext);
  return (
    <button
      onClick={onClick}
      className={cn(
        'p-2 h-10',
        'flex w-full gap-6',
        'rounded-md cursor-pointer text-left',
        'hover:bg-B90',
        {
          'justify-end': isExpanded,
        }
      )}
    >
      {text && (
        <div 
          className={cn(
            'flex-grow', 
            `transition-opacity transition-absolute ease-in-out overflow-hidden`,
            {
              'opacity-100 w-full': !isExpanded,
              'opacity-0 w-0': isExpanded,
            }
          )}
          style={{ 
            transitionProperty: 'opacity, width, position'
          }}
        >
          <Typography size='base'>{text}</Typography>
        </div>
      )}

      <BubbleGum 
        text={text || ''}
        hide={!text || !isExpanded}
      >
        <DynamicIcon 
          iconName={iconName} 
          stroke={getColorByName('A00')?.hex}
          className='flex-shrink-0'
        />
      </BubbleGum>
    </button>
  );
}