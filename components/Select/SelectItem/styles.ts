import cn from 'classnames';
import { ListBoxBehaviorTypes } from '../types';

export const innerListBoxStyles = ({ 
  active, 
  selected 
}: ListBoxBehaviorTypes) => (cn(
  'py-2 pr-10 pl-5',
  'relative cursor-pointer select-none',
  'text-A00',
  {
    'bg-B90': active,
    'bg-C60': selected
  }
));

export const iconBoxStyles = cn(
  'absolute inset-y-0 right-0 flex items-center mr-3'
)

export const iconStyles = cn(
  'stroke-current svgGroup-text-A00 svgGroup-hover:svgGroup-text-C100'
)