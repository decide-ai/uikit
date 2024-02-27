import React, { memo, ReactElement } from "react";
import { IconProps, SvgWrapProps } from './types';

const defaultViewBox = "0 0 24 24";

export const SvgWrap = ({
  size = 24,
  fill = "none",
  stroke = "none",
  strokeWidth = 1.2,
  viewBox = defaultViewBox,
  className,
  ratio = 1,
  children,
}: IconProps & SvgWrapProps & { children: ReactElement }): ReactElement => (
  <svg
    fill={fill}
    height={size}
    viewBox={viewBox}
    width={size * ratio}
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    stroke={stroke}
    strokeWidth={strokeWidth}
    className={className}
  >
    {children}
  </svg>
);

const getRatioFromViewBox = (viewBox: string): number => {
  const [, , width, height] = viewBox.split(" ");
  return +width / +height;
};

export function withSvgWrap(
  iconBody: ReactElement | string,
  svgWrapProps: SvgWrapProps = {}
): React.ComponentType<IconProps> {
  const { viewBox = defaultViewBox, ratio } = svgWrapProps;
  const targetRatio = ratio || getRatioFromViewBox(viewBox);

  const SvgIcon: React.FC<IconProps> = (props) => (
    <SvgWrap ratio={targetRatio} viewBox={viewBox} {...props}>
      {typeof iconBody === "string" ? <path d={iconBody} /> : iconBody}
    </SvgWrap>
  );

  return memo(SvgIcon);
}
