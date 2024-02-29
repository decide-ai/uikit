export type ButtonIconPropTypes = {
  /**
   * The name of the icon to display inside the button.
   */
  iconName: string;

  /**
   * Optional. If true, the button will be disabled.
   */
  disabled?: boolean;

  /**
   * Optional. Defines the size of the icon inside the button. Defaults to 24.
   */
  size?: number,

  /**
   * Optional. Defines the button's skin (appearance). Can be 'standard', 'grey', or 'linear'. Defaults to 'standard'.
   */
  skin?: 'standard' | 'grey' | 'linear';

  /**
   * Optional. The function to call when the button is clicked.
   */
  onClick?: () => void;
}