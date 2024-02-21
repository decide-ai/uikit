import React from 'react';
import { ListSectionProps } from '../types';

export const ListSection: React.FC<ListSectionProps> = ({ 
  title, 
  children 
}) => (
  <section key={title} className="mb-8">
    <div className="text-2xl font-bold leading-6 mb-4">{title}</div>
    <div className="flex flex-row flex-wrap items-start pb-14 gap-3">  
      {children}
    </div>
  </section>
);