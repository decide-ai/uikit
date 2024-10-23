import React from 'react';

export type GridColsProps = {
  /**
   * Children components
   */
  children: React.ReactNode | React.ReactNode[];
  
  /**
   * Extra styles
   */
  className?: string;

  /**
   * Number coloms;
   */
  columns: number;

  /**
   * Min numbers coloms;
   */
  smColumns?: number;

  /**
   * Max coloms number;
   */
  lgColumns?: number;

  /**
   * Size between items;
   */
  gap?: string;
};