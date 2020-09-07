import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { MyInput, Error } from './styles';

export default function Input({ name, children, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {error && <Error>{error}</Error>}
      <MyInput
        ref={inputRef}
        error={error}
        defaultValue={defaultValue}
        {...rest}
      />
    </>
  );
}
