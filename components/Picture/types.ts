/**
 * Type definition for individual source items in a <picture> element.
 */
type SourceItem = {
  /**
   * Defines the set of images to use in different situations (e.g., high-resolution displays, different viewport sizes).
   */
  srcSet?: string[],

  /**
   * (Optional) Specifies a media condition (like media queries) that the user agent will evaluate for each <source>.
   */
  media?: string[],
  sizes?: string[],
}

/**
 * Type definition for props expected by the Image component.
 */
export type ImagePropTypes = {
  /**
   * Image URL to be used as the src attribute of the <img> tag.
   */
  src: string,

  /**
   * Alternative text for the image, used for accessibility.
   */
  alt?: string,

  /**
   * Title of the image, often displayed as a tooltip when the mouse hovers over it.
   */
  title?: string,

  /**
   * Indicates how the browser should load the image: 'lazy' for lazy loading, 'eager' for immediate loading, or undefined to let the browser decide.
   */
  loading?: 'lazy' | 'eager' | undefined,

  /**
   * CSS class(es) to apply to the <img> tag.
   */
  className?: string,
};

/**
 * Combines SourceTypes and ImagePropTypes for the Picture component which includes <source> elements and an <img> element.
 */
export type PicturePropTypes = SourceItem & ImagePropTypes;
