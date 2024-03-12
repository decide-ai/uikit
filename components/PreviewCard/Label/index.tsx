import React from 'react';
import { Typography } from '../../Typography';
import { LabelPropTypes } from '../types';

export const Label: React.FC<LabelPropTypes> = ({ label }) => (
  <div className='bg-C00 rounded-md py-1 px-2.5 text-center'>
    <Typography size="sm">{label}</Typography>
  </div>
);