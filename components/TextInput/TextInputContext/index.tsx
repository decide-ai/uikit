import React, { useState, createContext, ReactNode } from 'react';

// Types
import { TextInputPropsTypes } from '../types';

type ITextInputContext = TextInputPropsTypes & {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleClear: () => void;
}

const defaultValue: ITextInputContext = {
  value: '',
  handleChange: () => {},
  handleClear: () => {},
};

export const TextInputContext = createContext<ITextInputContext>(defaultValue);

export const TextInputProvider = ({ 
  children,
  type = 'text',
  view = 'input',
  theme = 'darkGreen',
  skin = 'inline',
  size = 'small',
  ...props
}: TextInputPropsTypes & { children: React.ReactNode }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (props.onChange) props.onChange(e);
  };

  const handleClear = () => setValue('');

  return (
    <TextInputContext.Provider value={{ 
      value, 
      handleChange, 
      handleClear,
      type,
      view,
      theme,
      skin,
      size,
      ...props
    }}>
      {children}
    </TextInputContext.Provider>
  );
};
