import React from 'react';
import cn from 'classnames';
import { Drawer } from '../index';
import { StatHeader } from './StatHeader';
import { ButtonsGroup } from './ButtonsGroup';
import { StatBoxPropTypes } from './types';

/**
 * The StatBox component encapsulates a statistical data presentation with optional action buttons
 */
export const StatBox: React.FC<StatBoxPropTypes> = ({ 
  label, 
  iconName,
  children,
  primaryBtnText,
  primaryBtnOnClick,
  secondaryBtnText,
  secondaryBtnOnClick,
  skin = 'standard',
  tooltip,
}) => {
  /**
   * Validates the existence of `children` | `iconName` | `label` to ensure the StatBox component has content to display.
   * If require props are not provided, an error message is logged, and the function returns null,
   * preventing the rendering of an empty or undefined StatBox.
   */
  if (!children && !label && !iconName) {
    console.error(`Children, iconName and label in Drawer component are not exist. Please add children, iconName, and label`);
    return null;
  }
  
  return (
    <Drawer skin={skin}>
      <div className="w-full flex flex-col gap-2 md:gap-4">
        <StatHeader 
          label={label}
          iconName={iconName}
          tooltip={tooltip}
        />

        <div className={cn("flex md:items-end", {
          'md:flex-row flex-col md:gap-2.5 gap-2': primaryBtnText || secondaryBtnText
        })}>
          {children}

          {(primaryBtnText || secondaryBtnText) && (
            <ButtonsGroup 
              primaryBtnText={primaryBtnText}
              primaryBtnOnClick={primaryBtnOnClick}
              secondaryBtnText={secondaryBtnText}
              secondaryBtnOnClick={secondaryBtnOnClick}
            />
          )}
        </div>
      </div>
    </Drawer>
  );
}