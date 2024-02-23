export type ListSectionProps = {
  /** Section title */
  title: string;
  /** Section children for list with icons */
  children: React.ReactNode;
}

export type ColorBoxProps = {
  /** Color name in global tailwind and css styles */
  name: string;
  /** Color hex */
  hex: string;
}

export type ChildrenProps = {
  /** Children */
  children: React.ReactNode;
}