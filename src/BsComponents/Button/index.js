import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, type = 'button', onClick, ...rest }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type || 'button'} {...{ className, onClick, ...rest }}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
