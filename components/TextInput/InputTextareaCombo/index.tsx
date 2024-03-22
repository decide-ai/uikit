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
    height
  } = useContext(TextInputContext);

  const inputCommonProps = {
    id: inputId,
    value: value,
    onChange: handleChange,
    placeholder: placeholder,
    disabled: disabled || viewOnly,
    className: cn(
      'py-2 pl-3',
      'text-sm',
      'border rounded-lg w-full',
      'placeholder:text-sm placeholder:text-A50',
      'focus:outline-none focus-visible:ring-1 focus-visible:ring-white/75 focus-visible:ring-offset-1 focus-visible:ring-offset-B00',
      {
        'border-D00': isError,
        'border-A100': !isError,
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