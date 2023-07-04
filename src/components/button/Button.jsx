import React from 'react';
import './Button.scoped.css';

function Button({
  text, backgroundColor, foregroundColor, onClick,
}) {
  return (
    <button
      type="button"
      style={{
        backgroundColor,
        color: foregroundColor,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
