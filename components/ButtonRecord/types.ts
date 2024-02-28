// Definition of prop types for ButtonRecord
export type ButtonRecordPropTypes = {
  /**
   * Text representation of the timer, displayed above the button. Doesn't work with photo type button.
   */
  timer?: string;
  
  /**
   * Text color for the `timer` and `label` elements, using color names from the design system, doesn't work with hex, rgb, and etc.
   * Defaults to 'A00'.
   */
  textColor?: string;
  
  /**
   * Text label displayed below the button, for additional information or action associated with the button.
   */
  label?: string;
  
  /**
   * The type of the button, determining its functional purpose and styling. 
   * 'photo' for buttons related to photography, 'record' for recording buttons.
   * Defaults to 'photo'.
   */
  type: 'photo' | 'record';
  
  /**
   * Flag indicating the active (selected) state of the button. Use only for button withtype 'record.
   */
  active?: boolean;
  
  /**
   * Flag indicating whether the button should be disabled (inactive for user actions).
   */
  disabled?: boolean;
}