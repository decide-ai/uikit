import React from 'react';
import cn from 'classnames';

// Components
import { DynamicIcon } from '../index';

// Types
import { ButtonIconPropTypes } from './types';

// Styles
import { 
  skinClasses, 
  disabledSkinClasses, 
  roundedSizeClasses, 
  iconSkinClasses 
} from './styles';

/**
 * ButtonIcon is a React functional component that renders a button with an icon.
 * 
 * The component displays a button with an icon.
 * This component displays only the icon.
 * 
 * The component uses the `iconName` prop to determine which icon to display inside the button.
 */
export const ButtonIcon: React.FC<ButtonIconPropTypes> = ({ 
  iconName,
  disabled,
  them = 'lightGreen',
  skin = 'standard',
  rounded = 'lg',
  size = 24,
  onClick,
}) => {
  /** Skin styles dependent from them */
  const skinClassesInline = skinClasses(them);
  const skinClass = skinClassesInline[skin];

  /**
   * Hover styles that depend on them; 
   * These variables are used for the hover color of the icon;
   */
  const groupHoverClasses = iconSkinClasses(them);
  const skinGroupHover = groupHoverClasses[skin];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        skinClass,
        disabledSkinClasses[skin],
        roundedSizeClasses[rounded],
        'group',
        'border-solid border-[1px] cursor-pointer p-1.5',
        {
          'pointer-events-none': disabled,
        }
      )}
    >
      <DynamicIcon
        iconName={iconName}
        size={size}
        className={cn('stroke-current', skinGroupHover, {
          'text-A00': !disabled,
          'text-A70': disabled
        })} 
      />
    </button>
  );
}