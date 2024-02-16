import * as Icons from './index';

type IconProps = {
  fill?: string;
  width?: number;
  height?: number;
}

type IconItem = {
  name: string;
  component: React.ReactElement;
}

export const getBasicIcons = ({
  fill,
  width,
  height,
}: IconProps): Map<string, React.ReactElement> => {
  const iconItems: IconItem[] = [
    {
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
