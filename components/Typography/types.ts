export type TypographyProps = {
  /** 
   * Component tag name; default tag prop equal div
   */
  tagName?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

  /** 
   * Typography size; default value equal base
   */
  size?: "2xs" | "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";

  /** 
   * Typography weight; default value equal normal
   */
  weight?: "light" | "normal" | "medium" | "bold";

  /** 
   * Typography style; default value equal normal
   */
  style?: "normal" | "italic";

  /** 
   * Typography color; default value equal A00
   */
  color?: string;

  /** Text */
  children: React.ReactNode | string;

  /** 
   * Should text be responsive and resize on different devices?
   */
  adaptive?: boolean;
};