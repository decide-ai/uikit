export type ButtonPropsTypes = {
  /**
   * Control button size with size prop:
   * large - is best for calls to action that require more emphasis.
   * medium - is for main page actions and common use cases.
   * small - fits into smaller UI elements like cards, table and widgets.
   * tiny - is used for dense layouts.
   */
  size?: 'large' | 'medium' | 'small' | 'tiny';
  /**
   * Change the appearance of a button with a skin prop.
   * standard - is for general primary actions. This skin add primary A00 color, use as default value.
   * inline - this skin add burder. Sometime use in interface with standart button.
   * grey - this skin add grey background to button.
   * inline-gray - this skin mix with inline and gray buttons styles.
   * light - this skin add green background to button.
   */
  skin?: 'standart' | 'inline' | 'grey' | 'light' | 'inlineGrey';
  /**
   * To disable a button, use the disabled prop which indicates a button can't be selected.
   */
  disabled?: boolean;
  /**
   * When working on mobile designs, use the fullWidth prop to fill the button to 100% of the parent container.
   */
  fullWidth?: boolean;
  /**
   * When an action is delayed and still loading, use loading prop for display process in button. 
   * Loader displayed instead of a label on the button.
   */
  loading?: boolean;
  /**
   * Retrieves the icon name and renders the icon to the right of the text. Utilize the predefined icon set available for the button. If required, a custom icon can be incorporated through a child element.
   */
  iconName?: 'RestartIcon' | 'DownloadIcon' | 'UploadIcon' | 'TrashBinTrashIcon';
  /**
   * Children - if required, a custom icon can be incorporated through a child element.
   */
  children?: React.ReactNode;
  /**
   * Indicator - utilized to display various interface activities, such as rejection or acceptance. Primarily used for Poh.
   */
  indicator?: 'red' | 'green' | 'grey' | 'yellow';
  /**
   * Any user text, if required, a custom text can be incorporated through a child element.
   */
  buttonText?: string;
}


export type IndicatorTypes = Pick<ButtonPropsTypes, 'indicator' | 'disabled'>
export type ButtonIconTypes = Pick<ButtonPropsTypes, 'iconName' | 'skin' | 'size'>