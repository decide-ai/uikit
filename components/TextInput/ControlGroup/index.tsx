import React, { useContext } from 'react';

// Components
import TextInputContext from '../TextInputContext';
import { ControlGroupWrap } from '../ControlGroupWrap';
import { IconWrap } from '../IconWrap';
import { Typography, ButtonIcon } from '../../index';

export const ControlGroup = () => {
  const { 
    type,
    value,
    inputText, 
    clearText, 
    require, 
    viewOnly, 
    handleClear 
  } = useContext(TextInputContext);

  return (
    <ControlGroupWrap>
      <React.Fragment>
        {(inputText && type === 'input') && (
          <Typography 
            tagName="span" 
            size="sm"
          >
            {inputText}
          </Typography>
        )}

        {value && clearText && !viewOnly && (
          <ButtonIcon 
            onClick={handleClear} 
            iconName='TrashBinTrashIcon' 
          />
        )}

        {(require && type === 'input') && (
          <IconWrap iconName="DoubleCheckIcon" />
        )}

        {viewOnly && (
          <IconWrap iconName="LockKeyholeMinimalisticIcon" />
        )}
      </React.Fragment>
    </ControlGroupWrap>
  );
};