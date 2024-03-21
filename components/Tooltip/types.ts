import React from 'react';

export type TooltipPropTypes = {
  /**
   * The name of the icon to display inside the Reference element. Default icon is `QuestionCircleIcon`
   */
  iconName?: string;

  /**
   * The text content to display within the Floating element.
   */
  text: string;

  /**
   * Determines the size or Reference element. Defaults to 'large'.
   * 
   * - `large` = 24px;
   * - `medium` = 22px;
   * - `small` = 18px
   */
  size: 'large' | 'medium' | 'small';
}

export type TooltipContenxtPropTypes = {
  /**
   * The trigger element(s) that the floating element is anchored to.
   */
  children: React.ReactNode;
}

export type FloatingElementPropTypes = Pick<TooltipPropTypes, 'text'>
export type ReferenceElementPropTypes = Pick<TooltipPropTypes, 'size' | 'iconName'>