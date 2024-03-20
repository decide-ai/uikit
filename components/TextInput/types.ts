import React from 'react';

export type TextInputPropsTypes = {
  /** 
   * Placeholder text for the input/textarea. This text is displayed when the input is empty,
   * providing a hint to the user about what information is expected.
   */
  placeholder?: string;
  
  /** 
   * If true, a clear button (X) is displayed inside the input/textarea, allowing the user to easily clear the entered text.
   */
  clearText?: boolean;
  
  /** 
   * Indicates whether the input/textarea is in an error state. If true, the input's appearance is modified
   * (e.g., border color) to indicate an error, typically used in form validation.
   */
  isError?: boolean;
  
  /** 
   * The message to display when `isError` is true. This text typically describes the error or how to fix it.
   */
  errorMessage?: string;
  
  /** 
   * Callback function that is called when the input's value changes. It receives the current value as an argument.
   * This is where you would handle data binding and form state management.
   */
  onChange?: (value: string) => void;
  
  /** 
   * Text label for the input. This label is associated with the input by using the `inputId` prop.
   */
  label?: string;
  
  /** 
   * If true, the input/textarea is disabled, preventing user interaction.
   */
  disabled?: boolean;
  
  /** 
   * If true, displays an indicator (e.g., a checkmark) to signify that the input is required in a form.
   * The visual representation of this requirement can vary based on design.
   * 
   * !!! IMPORTANT: Works only for input;
   */
  require?: boolean;
  
  /** 
   * Used in conjunction with `require`. Indicates whether the required field has been checked/filled.
   * This could modify the appearance of the required indicator.
   * 
   * !!! IMPORTANT: Works only for input;
   */
  checked?: boolean;
  
  /** 
   * If true, the input is in a read-only state where it can display a value but cannot be modified by the user.
   * This is used for displaying static information in an input-like format.
   */
  viewOnly?: boolean;
  
  /** 
   * The unique identifier for the input element. Necessary for associating the input with its label for accessibility.
   */
  inputId?: string;
  
  /** 
   * Additional text to display inside the input's action area, which could be used for displaying units (e.g., kg, cm) 
   * or any other supplementary information.
   * 
   * !!! IMPORTANT: Works only for input;
   */
  inputText?: string;
  
  /** 
   * The initial value of the input/textarea. This is useful for initializing the component with a specific value.
   */
  defaultValue?: string;
  
  /** 
   * Specifies the type of control to render. When set to 'input', a single-line text input is displayed.
   * When set to 'textarea', a multi-line textarea is displayed. Defaults to 'input'.
   */
  type?: 'input' | 'textarea';

  /**
   * Add size tot the textarea, it can be '300px' or '10rem';
   * 
   * !!! IMPORTANT: Works only for textarea;
   */
  height?: string;
}

export type IconWrapPropTypes = {
  /**
   * Dynamic icon name;
   */
  iconName: string;
}

export type ControlGroupWrapPropTypes = {
  /**
   * Wrapper children
   */
  children: React.ReactNode;
}