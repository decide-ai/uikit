import React from 'react';
import cn from 'classnames';
import {
  RestartIcon,
  DownloadIcon,
  UploadIcon,
  TrashBinTrashIcon,
} from '../../index';
import { ButtonIconTypes } from '../types';
import { svgIconSkinColors } from './styles';

/**
 * if you need a new icon just add IconName to this object
 */
const ICON_COMPONENT = {
  'RestartIcon': RestartIcon,
  'DownloadIcon': DownloadIcon,
  'UploadIcon': UploadIcon,
  'TrashBinTrashIcon': TrashBinTrashIcon,
}

/**
 * The icon size depends on the button size props
 */
const SIZE = {
  large: 22,
  medium: 22,
  small: 18,
  tiny: 18
}

/**
 * Is a React component designed to display icons inside buttons
 * 
 * iconName - The icon name that determines which icon will be displayed. 
 *            Available values: "RestartIcon", "DownloadIcon", "UploadIcon", "TrashBinTrashIcon".
 * 
 * size - icon size. Available values: "large 22px", "medium 22px", "small 18px", "tiny 18px". 
 *        The default size is "medium".
 * 
 * skin - An icon skin option that specifies the color of the icon. 
 *        The values depend on the settings in svgIconSkinColors.
 */
export const ButtonIcon: React.FC<ButtonIconTypes> = ({ 
  iconName, 
  size,
  skin 
}) => {
  /** Button icon */
  const IconComponent = iconName ? ICON_COMPONENT[iconName] : null;
  /** Button icon stroke color */
  const iconColor = skin && svgIconSkinColors[skin];
  const iconSize = size && SIZE[size];

  return (
    <span className={cn('rounded-md ml-2')}>
      {IconComponent && (
        <IconComponent
          size={iconSize}
          className={`stroke-current ${iconColor}`}
          strokeWidth={1.5}
        />
      )}
    </span>
  );
}