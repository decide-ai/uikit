import React from 'react';
import { Button } from '../../Button';
import { ButtonPropsTypes } from '../types';

export const ButtonsGroup: React.FC<ButtonPropsTypes> = ({
  primaryBtnText,
  primaryBtnOnClick,
  secondaryBtnText,
  secondaryBtnOnClick
}) => (
  <div className="flex md:flex-col flex-row gap-2">
  {primaryBtnText && primaryBtnOnClick && (
    <Button
      buttonText={primaryBtnText}
      onClick={primaryBtnOnClick}
      size="tiny"
      skin="inlineGrey"
    />
  )}

  {secondaryBtnText && secondaryBtnOnClick && (
    <Button
      buttonText={secondaryBtnText}
      onClick={secondaryBtnOnClick}
      size="tiny"
      skin="inlineGrey"
    />
  )}
  </div>
);