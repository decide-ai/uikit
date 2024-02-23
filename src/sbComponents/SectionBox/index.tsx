import React from 'react';
import { Typography } from '../../../components';
import { SectionBoxProps } from '../types';

export const SectionBox: React.FC<SectionBoxProps> = ({ 
  title, 
  children,
}) => (
  <section>
    <Typography
      tagName="h3"
      weight="medium"
      size="2xl"
    >
      {title}
    </Typography>
    <div className="mt-4">
      {children}
    </div>
  </section>
);