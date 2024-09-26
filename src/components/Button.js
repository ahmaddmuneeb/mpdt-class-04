import React from "react";

const Button = ({ buttonTitle, onPress }) => {
  return (
    <div>
      <button onClick={onPress}>{buttonTitle}</button>
    </div>
  );
};

export default Button;
