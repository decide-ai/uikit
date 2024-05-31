export type SizeTypes = {
  [key: string]: string;
  large: string;
  medium: string;
  small: string;
  tiny: string;
}

export type SkinTypes = {
  [key: string]: string;
  standard: string;
  grey: string;
  green: string;
  black: string;
  blue: string;
}

export type SizeSpinnerKeys = 'large' | 'medium' | 'small' | 'tiny';
export type SkinSpinnerKeys = 'standard' | 'grey' | 'green' | 'black' | 'blue';

export type SpinnerPropTypes = {
  /**
   * This prop is used to add a custom size. It accepts a number as a parameter
   * and applies styles to the component to control its size in pixels.
   */
  customSize?: number;

  /**
   * Controls the spinner size with the `size` prop. Available sizes are:
   * 'large', 'medium', 'small', and 'tiny'.
   */
  size?: SizeSpinnerKeys | string;

  /**
   * Changes the appearance of the spinner with the `skin` prop. Available skins are:
   * - 'standard': Used for the general primary skin. This skin makes the spinner border color A00.
   * - 'grey': This skin makes the spinner border color A70.
   * - 'green': This skin makes the spinner border color B00.
   */
  skin?: SkinSpinnerKeys | string;
}