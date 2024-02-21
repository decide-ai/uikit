export type IconProps = {
  /** Icon color */
  fill?: string;
  /** Icon size, use for width and height together, also use for size * ratio */
  size?: number;
  /** Svg view box */
  viewBox?: string;
  /** Stroke for svg */
  stroke?: string;
  /** Stroke width for svg */
  strokeWidth?: number;
}

export type IconListItem = {
  /** Icon name, use for key */
  name: string;
  /** Icon Component */
  component: React.ReactElement;
}

export type IconMapItem = {
  /** Icon list type, also use for list title */
  title: string;
  /** Icons list */
  iconsList: IconListItem[];
}

export type IconsType = {
  [key: string]: React.ComponentType<IconProps>;
};

export type ListSectionProps = {
  /** Section title */
  title: string;
  /** Section children for list with icons */
  children: React.ReactNode;
}