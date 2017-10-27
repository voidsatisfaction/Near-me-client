import React from 'react';

import color from '../../../style/color';
import './style.css';

const TempMessageBox = (props) => {
  const { content, type } = props;
  return (
    <div
      className="temp-message-box-wrapper"
      style={{
        backgroundColor: color[type],
        color: color[`${type}Font`]
      }}
    >
      { content }
    </div>
  );
};

export default TempMessageBox;