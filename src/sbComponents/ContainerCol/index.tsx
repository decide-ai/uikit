import React from 'react';
import { ChildrenProps } from '../types';

export const ContainerCol: React.FC<ChildrenProps> = ({ children }) => (
  <div className="flex flex-col gap-y-16 w-full">
    {children}
  </div>
);