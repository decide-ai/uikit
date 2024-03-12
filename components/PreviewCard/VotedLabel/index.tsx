import React from 'react';
import { IconText, Typography } from '../../index';
import { VotedLabelPropTypes } from '../types';

export const VotedLabel: React.FC<VotedLabelPropTypes> = ({ 
  votedIconText, 
  votedLabel 
}) => (
  <div className='flex flex-col items-center justfy-center'>
    {votedIconText && (
      <IconText 
        iconSize={16}
        iconStrokeWidth={1.5}
        iconName='CheckCircleIcon'
        text={votedIconText}
      />
    )}
    {votedLabel && (
      <Typography size='sm'>{votedLabel}</Typography>
    )}
  </div>
);