import React from 'react';
import cn from 'classnames';

// Components
import { Indicator } from './Indicator';
import { ButtonIcon } from './ButtonIcon';
import { Loader } from './Loader';

// types
import { 
  ButtonPropsTypes,
} from './types';

// Styles
import {
  sizeClasses, 
  sizeClassesWithIcon,
  roundedSizeClasses,
  skinClasses,
} from './styles';

/**
 * This component is responsible for rendering a customizable button in a React application.
 * It utilizes Tailwind CSS for styling and supports a variety of props to control its appearance and behavior.
 * ### Displaying `buttonText`:

 - `buttonText` is displayed if `loading` is `true` and `spaceBetween` is `true`.
 - `buttonText` is displayed if `loading` is `false`.

 ### Other Elements:

 - The indicator (`Indicator`) is displayed if `indicator` is present and `loading` is `false`.
 - The loader (`Loader`) is displayed if `loading` is `true`.
 - The icon (`ButtonIcon`) is displayed if `iconName` is present and `loading` is `false`.
 */
export const Button: React.FC<ButtonPropsTypes> = ({
  size = 'medium',
  skin = 'standard',
  theme = 'darkGreen',
  rounded = 'lg',
  spaceBetween,
  disabled,
  fullWidth,
  loading,
  iconName,
  children,
  indicator,
  buttonText,
  onClick,
}) => {
  const skinClassesInline = skinClasses(theme);
  const skinClass = skinClassesInline[skin];
  const roundedClasses = roundedSizeClasses[rounded];
  const iconIndentationClasses = iconName ? sizeClassesWithIcon[size] : sizeClasses[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn({
          'pointer-events-none': disabled,
          'w-full': fullWidth,
          'justify-center': !spaceBetween,
          'justify-between': spaceBetween,
        },
        skinClass,
        iconIndentationClasses,
        roundedClasses,
        'svgGroup relative overflow-hidden gap-2',
        'flex items-center flex-shrink-0',
        'font-neue-montreal font-regular whitespace-nowrap',
        'transition duration-100 ease-in-out',
        
        // Use for accessible frontend components, the focus styles will only be shown 
        // when a user uses a keyboard to focus an element.
        'focus:outline-none focus:box-shadow-focus-ring focus-visible:box-shadow-focus-ring',
      )}
    > 
      {/**
       * 
       * Displaying buttonText:
       *  'buttonText' is displayed if 'loading' is true and 'spaceBetween' is true.
       *  'buttonText' is displayed if 'loading' is false.
       * Other Elements:
       *  The indicator (Indicator) is displayed if 'indicator' is present and 'loading' is false.
       *  The loader (Loader) is displayed if 'loading' is true.
       *  The icon (ButtonIcon) is displayed if 'iconName' is present and 'loading' is false.
       */}   
      {indicator && !loading && (
        <Indicator 
          indicator={indicator} 
          disabled={disabled}
        />
      )}

      {(loading && spaceBetween) || !loading ? buttonText : null}
      
      {children && children}

      {loading && (
        <Loader
          theme={theme}
          size={size} 
          skin={skin}
        />
      )}
      
      {iconName && !loading && (
        <ButtonIcon 
          iconName={iconName}
          skin={skin}
          size={size}
        />
      )}
    </button>
  );
}