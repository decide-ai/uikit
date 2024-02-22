import React from "react";
import { ColorBoxProps } from '../types';

export const ColorBox: React.FC<ColorBoxProps> = ({ name, hex }) => (
  <div className="flex flex-col w-[6rem] h-[6rem]">
    <div 
      className="h-full w-full" 
      style={{ backgroundColor: hex }} 
    />
    <div className="pt-2 text-xs text-black flex flex-col">
      <span>{name}</span> 
      <span>{hex}</span> 
    </div>
  </div>
);