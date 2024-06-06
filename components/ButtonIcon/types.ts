type ThemeTypes = 'darkGreen' | 'black' | 'blue' | 'lightGreen';
type RoundedTypes = 'full' | 'xl' | 'lg' | 'md';
type SkinTypes = 'standard' | 'grey' | 'linear';

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
  skin?: SkinTypes;

  /**
   * Optional. The function to call when the button is clicked.
   */
  onClick?: () => void;

  /**
   * When `rounded` is `full`, the button corners become fully rounded.
   * By default, the `rounded` prop is `lg`, which gives the button `rounded-lg` corners large;
   * For medium sizes `rounded-md` corners.
  */
  rounded?: RoundedTypes;

  /**
   * This prop sets the color for the text and skin. 
   * For example, if the theme prop is set to black, all button 
   * skins will have a black background, border, or color.
   * Default value: 'lightGreen'
   */
  theme?: ThemeTypes;
}