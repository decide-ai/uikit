export type ListSectionProps = {
  /** 
   * Section title
   */
  title: string;

  /** 
   * Section children for list with icons
   */
  children: React.ReactNode;
}

export type ColorBoxProps = {
  /** 
   * Color name in global tailwind and css styles
   */
  name: string;

  /** 
   * Color hex
   */
  hex: string;
  
  /** 
   * Color name in design system, use for background
   */
  bg: string;
  
  /** 
   * Color name in design system, use for text
   */
  text: string;
}

export type ChildrenProps = {
  /** 
   * Children
   */
  children: React.ReactNode;
}

export type ColorsMapItem = {
  /** 
   * Icon list type, also use for list title
   */
  group: string;
  /** 
   * Icons list
   */
  colorsList: ColorBoxProps[];
}