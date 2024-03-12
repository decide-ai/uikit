import React from 'react';
import { Picture } from '../../index';
import { PreviewImagePropTypes } from '../types';

export const PreviewImage: React.FC<PreviewImagePropTypes> = ({ picture }) => (
  <div className='w-full aspect-square flex justify-center items-center overflow-hidden rounded-md'>
    <Picture 
      src={picture}
      className='h-full w-full object-cover'
    />
  </div>
);