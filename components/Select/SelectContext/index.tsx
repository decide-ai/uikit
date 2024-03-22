import React, { createContext, useContext, useState } from 'react';

// Types
import { SelectContenxtPropTypes, ItemTypes } from '../types';

const SelectContext = createContext<any>(null);
export const useSelect = () => useContext(SelectContext);

// Provider component
export const SelectProvider: React.FC<SelectContenxtPropTypes> = (props) => {
  const { children, defaultValue, onSelectChange } = props;
  const [selectedValue, setSelectedValue] = useState<any>(defaultValue);

  const handlerOnChange = (value: ItemTypes) => {
    setSelectedValue(value);
    onSelectChange && onSelectChange(value);
  }

  const value = {
    handlerOnChange,
    selectedValue,
    ...props,
  };

  return (
    <SelectContext.Provider value={value}>
      {children}
    </SelectContext.Provider>
  );
};
