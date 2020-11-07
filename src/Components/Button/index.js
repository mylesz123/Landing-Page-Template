import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.css';

export default function Button({ children, className, onClick = () => {}, type = 'primary' }) {
  return (
    <button type="button" className={cx(styles.button, styles[type], className)} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};
