import React from 'react';
import { ListSectionProps } from '../types';

export const ListSection: React.FC<ListSectionProps> = ({ 
  title, 
  children 
}) => (
  <section>
    <div className="text-2xl font-bold leading-6 mb-4">{title}</div>
    <div className="flex flex-row gap-0">  
      {children}
    </div>
  </section>
);