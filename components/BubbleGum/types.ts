import React from 'react';

type BubbleGymChildren = {
  /**
   * The trigger element(s) that the floating element is anchored to.
   */
  children: React.ReactNode;
}

export type BubbleGumContenxtPropTypes = BubbleGymChildren;

export type BubbleGumPropTypes = BubbleGymChildren & {
  /**
   * The text content to display within the floating element.
   */
  text: string;

  /**
   * If true, the floating element will not be displayed. Useful for conditional rendering.
   */
  hide?: boolean;

  /**
   * Determines the style or theme of the floating element. Defaults to 'grey'.
   */
  skin?: 'inline' | 'grey' | 'light' | 'dark';

  /**
   * Use for customized referred component, require tailwind classes.
   */
  className?: string;
};

/**
 * Props:
 * 
 * - `text` (string): The text content to display within the floating element.
 * - `skin` (string): Determines the style or theme of the floating element. Affects background and border styling.
 */
export type FloatingElementPropTypes = Pick<BubbleGumPropTypes, 'text' | 'skin'>