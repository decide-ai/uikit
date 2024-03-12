export type IconTextPropsTypes = {
  /**
   * The name of the icon to display. This prop is required.
   * It should match one of the available icon names in the icon library.
   */
  iconName: string;

  /**
   * The text to display alongside the icon. This prop is required.
   */
  text: string;

  /**
   * Optional. The size of the text. Can be one of the predefined text sizes:
   * "2xs", "xs", "sm", "base", or "lg". Defaults to "sm" if not specified.
   */
  textSize?: "2xs" | "xs" | "sm" | "base" | "lg";

  /**
   * Optional. The size of the icon in pixels. Defaults to 24 if not specified.
   */
  iconSize?: number;

  /**
   * Optional. The stroke color of the icon. Defaults to "#1B4444" if not specified.
   * Color have to be in hex fromat.
   */
  iconStroke?: string;

  /**
   * Optional. The color of the text. Defaults to 'A00' if not specified. 
   * Uses color code from color library.
   */
  textColor?: string;

  /**
   * Optional. The stroke width of the svg icon. Defaults to 1.2 if not specified.
   */
  iconStrokeWidth?: number;
}