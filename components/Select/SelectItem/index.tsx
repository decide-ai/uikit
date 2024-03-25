import React from 'react';
import { Listbox } from '@headlessui/react';

// Components
import { CheckIcon, Typography } from '../../index';

// Context / Styles / Types etc...
import { 
  innerListBoxStyles, 
  iconBoxStyles, 
  iconStyles 
} from './styles';
import { SelectItemPropTypes } from '../types';

export const SelectItem: React.FC<SelectItemPropTypes> = ({ 
  selectItem,
}) => (
  <Listbox.Option 
    value={selectItem}
    className={innerListBoxStyles}
  >
    {({ selected }) => (
      <React.Fragment>
        <Typography
          truncate
          size="sm"
          weight={selected ? 'bold' : 'normal'}
          whitespaceNowrap
        >
          {selectItem.name}
        </Typography>
        {selected && (
          <span className={iconBoxStyles}>
            <CheckIcon 
              className={iconStyles}
            />
          </span>
        )}
      </React.Fragment>
    )}
  </Listbox.Option>
)