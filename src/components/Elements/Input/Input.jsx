import React from "react";

function Input(props) {
  const { type, placeholder, value, onChange } = props;

  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs mx-auto"
      />
    </>
  );
}

export default Input;
