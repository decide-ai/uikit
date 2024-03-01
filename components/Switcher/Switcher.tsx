import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { SwitcherPropTypes } from './types';
import styles from './styles.less';
const cn = classNames.bind(styles);

/**
 * Switcher component for creating a customizable switch with various settings
 */
export const Switcher: React.FC<SwitcherPropTypes> = ({
  initialChecked = false,
  size = 'small',
  viewOnly,
  disabled,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  /**
   * Handler for changing the switch's status
   */
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    /**
     * Check if the switch is neither disabled nor in read-only mode
     */
    if (!disabled && !viewOnly) {
      const newChecked = e.target.checked;

      setIsChecked(newChecked);
      onChange(newChecked);
    }
  }

  /**
   * If the switch is disabled, it's always in the unchecked state
   */
  const checked = disabled ? false : isChecked;
  
  return (
    <input 
      type="checkbox" 
      role="switch" 
      className={cn('switcher', {
        '_view-only': viewOnly, // Add class for read-only mode
        [`_size-${size}`]: size, // Add class to set the size of the switch
      })} 
      disabled={disabled}
      checked={checked}
      onChange={handleCheckboxChange}
    />
  );
}