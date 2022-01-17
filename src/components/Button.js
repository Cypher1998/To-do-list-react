import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, color, styling, onClick }) => {
  return (
    <button
      className={`btn ${styling}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  styling: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
