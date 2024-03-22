import React from 'react';
import { Listbox } from '@headlessui/react';

// Components
import { Typography } from '../index';
import { SelectProvider, useSelect } from './SelectContext';
import { TransitionBox } from './TransitionBox';
import { ReferenceElement } from './ReferenceElement';
import { SelectItem } from './SelectItem';

// Styles / Types / etc ...
import { listBoxStyles, wrapperNodeStyles } from './styles';
import { SelectPropTypes, ItemTypes } from './types';

export const SelectComponent: React.FC<SelectPropTypes> = () => {
  const { 
    handlerOnChange, 
    selectedValue, 
    label, 
    selectList, 
    selectBy 
  } = useSelect();

  return (
    <Listbox 
      by={selectBy || 'id'}
      value={selectedValue} 
      onChange={handlerOnChange}
    >
      <div className={wrapperNodeStyles}>
        {label && (
          <Listbox.Label>
            <Typography size="sm">{label}</Typography>
          </Listbox.Label>
        )}

        <ReferenceElement />
        
        <TransitionBox>
          <Listbox.Options className={listBoxStyles}>
            {selectList.map((selectItem: ItemTypes) => (
              <SelectItem 
                key={selectItem.name}
                selectItem={selectItem}
              />
            ))}
          </Listbox.Options>
        </TransitionBox>
      </div>
    </Listbox>
  )
};

/**
 * Component is a dropdown select component that uses Headless UI's Listbox
 * for accessibility and Tailwind CSS for styling. It supports customizable label,
 * options, and onChange handler through context.
 */
export const Select: React.FC<SelectPropTypes> = (props) => (
  <SelectProvider {...props}>
    <SelectComponent />
  </SelectProvider>
);