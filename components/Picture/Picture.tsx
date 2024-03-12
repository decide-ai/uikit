import React from 'react';
import { PicturePropTypes } from './types';
import { Image } from './Image';

const joinToString = (arrayWithStr: string[]): string => arrayWithStr.join(', ');

/**
 * The Picture component renders a <picture> element containing zero or more <source> elements for different image resources and an <img> element for the default image.
 * This allows the browser to choose the most appropriate image according to the current layout, viewport, and screen capabilities.
 */
export const Picture: React.FC<PicturePropTypes> = ({
  loading, 
  alt, 
  className, 
  src, 
  title,
  srcSet,
  media,
  sizes,
}) => {
  /** Сheck if the src exists */
  if (!src) {
    console.error('Prop with name src does not exist in Picture component.');
    return null;
  }

  if (srcSet && srcSet.length) {
    const srcSetString = srcSet && joinToString(srcSet);
    const sizesString = sizes && joinToString(sizes);
    const mediaString = media && joinToString(media);

    return (
      <picture>
        <source
          srcSet={srcSetString}
          sizes={sizesString}
          media={mediaString}
        />
        <Image 
          loading={loading} 
          alt={alt}
          className={className}
          src={src} 
          title={title}
        />
      </picture>
    )
  }

  return (
    <Image 
      loading={loading} 
      alt={alt}
      className={className}
      src={src} 
      title={title}
    />
  );
}

export default Picture;
