import React from 'react';
import { Typography } from '../Typography';
import cn from 'classnames';
import { ButtonRecordPropTypes } from './types';

/**
 * The current button component is used for recording or taking photos. 
 * It has two states depending on the type: 'record' or 'photo'.
 */
export const ButtonRecord: React.FC<ButtonRecordPropTypes> = ({
  timer,
  textColor = 'A00',
  label,
  type = 'photo',
  active,
  disabled,
}) => {
  const buttonClasses = cn(
    'mainButton flex items-center justify-center w-[44px] h-[44px] rounded-full border-[5px] border-D40',
    {
      'disabled:border-C00 disabled:pointer-events-none': disabled,
    }
  );

  const spanClasses = cn(
    'w-[30px] h-[30px] inline-block flex-shrink-0 rounded-full transition duration-300 ease-in-out hover:bg-D20',
    {
      'bg-A90': disabled,
      'bg-D00': !disabled,
      'active:scale-90': type === 'photo' && !disabled,
      'scale-50': type === 'record' && active && !disabled,
    }
  );

  return (
    <div className='flex items-center justify-center flex-col gap-y-2'>
      {(timer && type === 'record') && <Typography size="xs" color={textColor}>{timer}</Typography>}
      <button disabled={disabled} className={buttonClasses}>
        <span className={spanClasses} />
      </button>
      {label && <Typography size="xs" color={textColor}>{label}</Typography>}
    </div>
  );
};
