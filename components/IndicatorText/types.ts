export type IndicatorTextPropTypes = {
  /**
   * The text to be displayed. This prop is required.
   */
  text: string;

  /**
   * Optional. Indicator color which affects the small colored circle shown before the text.
   * Can be one of "red", "green", "grey", or "yellow". If not specified, no indicator is shown.
   */
  indicator?: "red" | "green" | "grey" | "yellow" | null;

  /**
   * Optional. Size of the text. Can be "2xs", "xs", "sm", "base", or "lg".
   * Defaults to "sm" if not specified.
   */
  textSize?: "2xs" | "xs" | "sm" | "base" | "lg";

  /**
   * Optional. Color of the text. Any valid color from color library can be used.
   * Defaults to 'A00' if not specified.
   */
  textColor?: string;
}

/**
 * Type for mapping indicator colors to their corresponding Tailwind CSS classes.
 */
export type IndicatorColorTypes = {
  [key: string]: string;
  red: string;
  green: string;
  grey: string;
  yellow: string;
}