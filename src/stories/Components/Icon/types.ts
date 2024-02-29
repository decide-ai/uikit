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
  component: React.ComponentType<IconProps>;
}

export type IconMapItem = {
  /** Icon list type, also use for list title */
  group: string;
  /** Icons list */
  iconsList: IconListItem[];
}

export type IconsType = {
  [key: string]: React.ComponentType<IconProps>;
};

export type ChildrenProps = {
  /** Children */
  children: React.ReactNode;
}