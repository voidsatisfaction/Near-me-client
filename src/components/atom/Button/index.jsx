import React from 'react';

import './style.css';

function Button(props) {
  const { text, onClick } = props;
  return (
    <div className="btn" onClick={ onClick }>
      { text }
    </div>
  );
}

export default Button;