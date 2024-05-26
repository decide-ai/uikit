import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { CheckIcon, getColorByName } from '../index';

// Types
import { CheckboxPropTypes } from './types';

// Classes
import { THEM_COLOR_SET, SIZE_SET, ROUNDED_SET } from './styles';

/**
 * Checkbox component with customizable styles and state management.
 */
export const Checkbox: React.FC<CheckboxPropTypes> = ({ 
  checked = false,
  them = 'darkGreen',
  size = 'medium',
  rounded = 'md',
  disabled,
  onChange
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  // Sync the local state with the checked prop
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  /**
   * Handles the change in checkbox state.
   * Toggles the isChecked state and calls the onChange callback if provided.
   */
  const handleCheckboxChange = () => {
    if (!disabled) {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      if (onChange) onChange(newChecked);
    }
  };

  const checkedIconColor = disabled ? 'F100' : 'C100';

  return (
    <div
      className={cn(
        'cursor-pointer',
        'flex items-center justify-center',
        'border rounded', 
        SIZE_SET[size],
        ROUNDED_SET[rounded],
        {
          [`${THEM_COLOR_SET[them]}`]: isChecked,
          'border-F100': !isChecked,
          'pointer-events-none border-C20 bg-C50': disabled
        })
      }
      onClick={handleCheckboxChange}
    >
      {isChecked && (
        <CheckIcon 
          stroke={getColorByName(checkedIconColor)?.hex} 
          strokeWidth={1.5}
        />
      )}
    </div>
  );
};