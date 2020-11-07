import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.css';

export default function Grid({ children, className, ...rest }) {
  return (
    <div className={cx(styles.grid, className)} {...rest}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
