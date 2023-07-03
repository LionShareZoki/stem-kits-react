import React from 'react';
import './Button.scoped.css';

function Button({ text, backgroundColor, foregroundColor }) {
  return (
    <button
      type="button"
      style={{
        backgroundColor,
        color: foregroundColor,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
