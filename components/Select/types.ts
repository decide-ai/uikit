import React from 'react';

export type ItemTypes = {
  /** 
   * Object contain id, is required object param;
   */
  id: number | string;
  
  /**
   * Object contain string, is required object param;
   */
  name: string;
}

export type ChildrenNodeTypes = {
  children: React.ReactNode;
}

export type SelectContenxtPropTypes = SelectPropTypes & ChildrenNodeTypes;

export type SelectItemPropTypes = {
  /**
   * Selected item;
   */
  selectItem: ItemTypes;
}

export type ListBoxBehaviorTypes = {
  /**
   * Is selected item active; That props uses Headless UI;
   */
  active: boolean; 

  /**
   * Is selected item selected; That props uses Headless UI;
   */
  selected: boolean 
}

export type SelectPropTypes = {
  /**
   * Array of items to be displayed in the dropdown
   */
  selectList: ItemTypes[];

  /**
   * Optional label for the select
   */
  label?: string;

  /**
   * Key to match for selection if not using default 'id'
   */
  selectBy?: string;
  
  /**
   * Function to call on changing the selected item
   */
  onSelectChange?: (value: ItemTypes) => void;

  /**
   * Use default value for pre-selected value when selecting. 
   * Must be an object with { id: string | number; name: string; };
   */
  defaultValue?: ItemTypes;

  /** 
   * This text is displayed when the input is empty,
   * providing a hint to the user about what information is expected.
   */
  placeholder?: string;

  /** 
   * If true, the select is disabled, preventing user interaction.
   */
  disabled?: boolean;
}