import React, { useContext } from 'react';
import cn from 'classnames';

// Components
import { TextInputContext } from '../TextInputContext';

export const InputTextareaCombo = () => {
  const { 
    type,
    value, 
    handleChange, 
    inputId, 
    placeholder, 
    disabled, 
    viewOnly,
    isError,
    clearText,
    height,
    them,
    skin,
    size,
  } = useContext(TextInputContext);

  const inputCommonProps = {
    id: inputId,
    value: value,
    onChange: handleChange,
    placeholder: placeholder,
    disabled: disabled || viewOnly,
    className: cn(
      'rounded-lg w-full',
      'focus:outline-none focus-visible:ring-1 focus-visible:ring-white/75 focus-visible:ring-offset-1 focus-visible:ring-offset-B00',
      {
        'py-3 px-5 text-base placeholder:text-base': size === 'medium',
        'py-2.5 pl-4 text-sm placeholder:text-sm': size === 'small',
        'placeholder:text-A50 disabled:text-A70 disabled:placeholder:text-A70': them === 'darkGreen',
        'placeholder:text-AF0 disabled:text-F70 disabled:placeholder:text-F70': them === 'black',
        'bg-C30 disabled:bg-C60': skin === 'grey',
        'border-D00 border': isError,
        'border-A100 border': !isError && skin === 'inline',
        'pointer-events-none': disabled,
        'pr-10': clearText || require,
        'pr-3': !clearText && !require,
      }
    ),
  };

  return (
    <React.Fragment>
      {type === 'input' ? (
        <input type="text" {...inputCommonProps} />
      ) : (
        <textarea 
          {...inputCommonProps} 
          style={{
            resize: 'vertical',
            height,
          }}
        />
      )}
    </React.Fragment>
  );
}