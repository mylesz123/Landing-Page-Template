import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles.module.css';

export default function Box({ className, children, size = 'small' }) {
  return (
    <div className={cx(styles.box, styles[size], className)}>{children}</div>
  );
}

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.PropTypes.oneOf(['small', 'medium', 'large']),
};
