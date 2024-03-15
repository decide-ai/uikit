import React, { useState } from 'react';
import { ChildrenNodePropTypes, ContextTypes } from '../types';

const defaultValue: ContextTypes = {
  isExpanded: true,
  toggleExpanded: () => {},
};

export const SideBarContext = React.createContext(defaultValue);

export const SideBarProvider: React.FC<ChildrenNodePropTypes> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(defaultValue.isExpanded);
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  return (
    <SideBarContext.Provider value={{ isExpanded, toggleExpanded }}>
      {children}
    </SideBarContext.Provider>
  );
}