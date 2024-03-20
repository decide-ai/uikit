export type TypographyProps = {
  /** 
   * Typography component for displaying text using predefined styles and configurations.
   */
  tagName?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div" | "label";

  /** 
   * The size of the text, supporting responsive sizes if 'adaptive' is true.
   */
  size?: "2xs" | "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

  /** 
   *  The font weight of the text.
   */
  weight?: "light" | "normal" | "medium" | "bold";

  /** 
   * The font style, either normal or italic.
   */
  style?: "normal" | "italic";

  /** 
   * The color of the text, specified as a string. Uses design system color codes.
   */
  color?: string;

  /** The content to be displayed within the typography component. */
  children: React.ReactNode | string;

  /** 
   * If true, enables responsive text sizing across different screen sizes.
   */
  adaptive?: boolean;

  /**
   * Use truncate to prevent text from wrapping and truncate overflowing text with an ellipsis (…) if needed.
   */
  truncate?: boolean;

  /**
   * Use props if we need use a label and connect the label to the input.
   */
  htmlFor?: string;
};