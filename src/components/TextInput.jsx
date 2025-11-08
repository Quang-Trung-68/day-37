import React from "react";

function TextInput({ placeholder, value, onChange, ref }) {
  return (
    <input
      ref={ref}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default TextInput;
