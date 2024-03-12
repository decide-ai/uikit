import React from 'react';
import { ImagePropTypes } from '../types';

/**
 * The Image component renders a single <img> element.
 */
export const Image: React.FC<ImagePropTypes> = ({ 
  loading, 
  className, 
  title, 
  src, 
  alt 
}) => (
  <img
    loading={loading}
    className={className}
    title={title}
    src={src}
    alt={alt}
  />
);