import React from 'react';
import { ChildrenProps } from '../types';

export const IconsList: React.FC<ChildrenProps> = ({ children }) => (
  <ul className="flex flex-row flex-wrap gap-3">
    {React.Children.toArray(children).map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);