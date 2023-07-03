import React from 'react';
import './Badge.scoped.css';

function Badge({
  topText, bottomText, backgroundColor, foregroundColor,
}) {
  return (
    <div style={{ backgroundColor }} className="badge">
      <p style={{ color: foregroundColor }} className="badge__top-text">{topText}</p>
      <p style={{ color: foregroundColor }} className="badge__botom-text">{bottomText}</p>
    </div>
  );
}

export default Badge;
