import * as Icons from './index';

type IconProps = {
  /** Icon color */
  fill?: string;
  /** Icon width */
  width?: number;
  /** Icon height */
  height?: number;
}

type IconItem = {
  /** Icon name, use for key */
  name: string;
  /** Icon type, use for sort or for easy search */
  type: string;
  /** Icon Component */
  component: React.ReactElement;
}

export const getBasicIcons = ({
  fill,
  width,
  height,
}: IconProps): Map<string, React.ReactElement> => {
  const iconItems: IconItem[] = [
    {
      type: "Users",
      name: 'userPlusIcon',
      component: <Icons.UserPlusIcon fill={fill} width={width} height={height} />,
    },
    // More icons here ...
  ];

  // Convert iconItems array to Map
  return new Map<string, React.ReactElement>(iconItems.map(item =>
    [item.name, item.component]
  ));
};
