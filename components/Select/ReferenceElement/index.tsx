import React from 'react';
import cn from 'classnames';

// Components
import { Typography, DynamicIcon, getColorByName } from '../../index';
import { Listbox } from '@headlessui/react';
import { useSelect } from '../SelectContext';

// Styles
import { listBoxStyles, iconStyles } from './styles';

export const ReferenceElement = () => {
  const { selectedValue, placeholder, iconName, disabled } = useSelect();

  const selectText = selectedValue ? selectedValue.name : placeholder;
  const selectTextColor = selectedValue ? 'A00' : 'A50';
  const selectIcon = iconName || 'AltArrowDownIcon';
  const iconHexColor = getColorByName('A00')?.hex;

  return (
    <Listbox.Button className={cn(listBoxStyles, {
      'pointer-events-none': disabled,
    })}>
      <Typography size="sm" color={selectTextColor} tagName='span'>
        {selectText}
      </Typography>

      <span className={iconStyles}>
        <DynamicIcon 
          iconName={disabled ? 'LockKeyholeMinimalisticIcon' : selectIcon}
          stroke={iconHexColor}
        />
      </span>

    </Listbox.Button>
  );
}