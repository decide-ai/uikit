import React, { useContext } from 'react';

// Components
import { Typography } from '../index';
import { InputTextareaCombo } from './InputTextareaCombo';
import { TextInputProvider } from './TextInputContext';
import { ControlGroup } from './ControlGroup';
import { TextInputContext } from './TextInputContext';

// Types
import { TextInputPropsTypes } from './types';

export const TextInputComponent: React.FC<TextInputPropsTypes> = () => {
  const { 
    label, 
    inputId, 
    clearText, 
    require, 
    viewOnly, 
    inputText, 
    isError, 
    errorMessage,
    them,
  } = useContext(TextInputContext);
  
  /** Dark Green or Black */
  const labelColor = them === 'darkGreen' ? 'A00' : 'F00';

  return (
    <React.Fragment>
      {label && (
        <div className='pb-1.5'>
          <Typography 
            tagName="label" 
            size="sm"
            color={labelColor}
            htmlFor={inputId}
          >
            {label}
          </Typography>
        </div>
      )}
      <div className="relative">
        <InputTextareaCombo />
        {(clearText 
        || require 
        || viewOnly 
        || inputText) && (
          <ControlGroup />
        )}
      </div>

      {isError && errorMessage && (
        <Typography 
          color="D00" 
          size="sm"
        >
          {errorMessage}
        </Typography>
      )}
    </React.Fragment>
  );
};

/**
 * The `TextInput` component is a flexible input control that can be configured to behave in various ways
 * depending on the provided props. It supports single-line inputs, multi-line textareas, clear functionality,
 * error states with messages, and customizable actions like required field indicators or custom buttons.
 * It's designed to be a versatile component for handling user input in forms and other interfaces.
 */
export const TextInput: React.FC<TextInputPropsTypes> = (props) => (
  <TextInputProvider {...props}>
    <TextInputComponent />
  </TextInputProvider>
);
