export type SkeletonProps = {
  /**
   * The number of skeleton elements to render. Useful for loading multiple lines of text or several elements.
   */
  count?: number;

  /**
   * The width of each skeleton element. Can be specified in any CSS unit or percentage.
   */
  width?: string | number;

  /**
   * The height of each skeleton element. Can be specified in any CSS unit or percentage.
   */
  height?: string | number;

  /**
   * An optional wrapper component to enclose the skeleton elements. Useful for custom layouts or additional styling.
   */
  wrapper?: React.ElementType;
}