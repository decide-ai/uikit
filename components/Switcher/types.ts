export type SwitcherPropTypes = {
  /**
   * Default state for the switch
   */
  initialChecked?: boolean;

  /**
   * Makes the switch disabled
   */
  disabled?: boolean;

  /**
   * Read-only mode, cannot be toggled
   */
  viewOnly?: boolean;

  /**
   * Size of the switch 
   */
  size: 'medium' | 'small';

  /**
   * Change event handler
   */
  onChange: (isChecked: boolean) => void;
}