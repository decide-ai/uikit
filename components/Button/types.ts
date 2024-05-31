export type SkinTypes = 'standard' | 'inline' | 'grey' | 'light' | 'inlineGrey' | 'limpid';
export type ThemTypes = 'darkGreen' | 'black' | 'blue';
export type SizeTypes = 'large' | 'medium' | 'small' | 'tiny';
type RoundedTypes = 'full' | 'xl' | 'lg' | 'md';

export type IndicatorStyleTypes = {
  [key: string]: string;
  red: string;
  green: string;
  yellow: string;
  grey: string;
}

export type LoaderSizeTypes = {
  [key: string]: string;
  large: string;
  medium: string;
  small: string;
  tiny: string;
}

export type LoaderSkinTypes = {
  [key: string]: string;
  standard: string;
  inline: string;
  grey: string;
  inlineGrey: string;
  light: string;
  limpid: string;
}

export type LoaderPropTypes = {
  /**
   * Controls the spinner/loader size with the `size` prop. Available sizes are:
   * 'large', 'medium', 'small', and 'tiny'.
   * Depends on the button skin.
   */
  size: SizeTypes;

  /**
   * Changes the appearance of the spinner with the `skin` prop.
   * Depends on the button skin.
   */
  skin: SkinTypes;

  /**
   * This prop sets the color for the loader. 
   * For example, if the theme prop is set to black, all loader 
   * skins will have a black background, border, or color.
   * Default value: 'darkGreen'
   */
  them?: ThemTypes;
}

export type ButtonPropsTypes = {
  /**
   * Control button size with size prop:
   * large - is best for calls to action that require more emphasis.
   * medium - is for main page actions and common use cases.
   * small - fits into smaller UI elements like cards, table and widgets.
   * tiny - is used for dense layouts.
   */
  size?: SizeTypes;

  /**
   * Change the appearance of a button with a skin prop.
   * standard - is for general primary actions. This skin add primary A00 color, use as default value.
   * inline - this skin add burder. Sometime use in interface with standard button.
   * grey - this skin add grey background to button.
   * inline-gray - this skin mix with inline and gray buttons styles.
   * light - this skin add green background to button.
   */
  skin?: SkinTypes;
  
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
   * Loader displayed instead of a label on the button. When the loader prop is enabled, the content of the button 
   * is replaced by the spinner, which remains visible until the loader prop is set to false.
   */
  loading?: boolean;
  
  /**
   * Retrieves the icon name and renders the icon to the right of the text. Utilize the predefined icon set available for the button. If required, a custom icon can be incorporated through a child element.
   */
  iconName?: string;
  
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

  /**
   * Button event callback.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * When `spaceBetween` is `true`, the text and icon will be with justify-between class.
   * By default, the `spaceBetween` prop is `false`, which makess the text and icon justify-center.
   */
  spaceBetween?: boolean;

  /**
   * This prop sets the color for the text and skin. 
   * For example, if the theme prop is set to black, all button 
   * skins will have a black background, border, or color.
   * Default value: 'darkGreen'
   */
  them?: ThemTypes;

  /**
   * When `rounded` is `full`, the button corners become fully rounded.
   * By default, the `rounded` prop is `lg`, which gives the button `rounded-lg` corners large;
   * For medium sizes `rounded-md` corners.
  */
  rounded?: RoundedTypes;
}

export type IndicatorTypes = Pick<ButtonPropsTypes, 'indicator' | 'disabled'>
type PickIconTypes = Pick<ButtonPropsTypes, 'skin' | 'size'>;
export type ButtonIconTypes = PickIconTypes & {
  iconName: string;
}