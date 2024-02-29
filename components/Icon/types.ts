import React from "react";

export type IconProps = {
  /** Icon color */
  fill?: string;
  /** Icon size, use for width and height together, also use for size * ratio */
  size?: number;
  viewBox?: string;
  /** Stroke for svg */
  stroke?: string;
  /** Stroke width for svg */
  strokeWidth?: number;
  /** Extra class for svg icon, use for hover */
  className?: string,
}

export type SvgWrapProps = {
  viewBox?: string;
  ratio?: number;
}

export type IconListItem = {
  /** Icon group name */
  group: string;
  /** Icon name, use for key */
  name: string;
  /** Icon Component */
  component: React.ComponentType<IconProps>;
}

export type IconMapItem = {
  /** Icons list */
  iconsList: IconListItem[];
}

export type IconsType = {
  [key: string]: React.ComponentType<IconProps>;
}

