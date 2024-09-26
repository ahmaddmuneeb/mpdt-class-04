import React from "react";

const TextInput = ({ label, placeholder, type, value, setValue }) => {
  return (
    <div>
      <p>{label}</p>
      <input placeholder={placeholder} type={type} value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default TextInput;
