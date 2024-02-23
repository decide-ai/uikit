import React from 'react';
import { ChildrenProps } from '../types';

export const ColorsList: React.FC<ChildrenProps> = ({ children }) => (
  <ul className="flex flex-row gap-0">
    {React.Children.toArray(children).map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);