import React, { forwardRef, useImperativeHandle, useRef } from "react";

const NewTextInput = forwardRef(({ placeholder, value, onChange }, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef?.current.focus();
      },
    };
  });

  return (
    <input
      ref={inputRef}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
});

export default NewTextInput;
