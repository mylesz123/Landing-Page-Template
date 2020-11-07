import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.css';

export default function Grid({
  children,
  className,
  fullWidth = false,
  ...rest
}) {
  return (
    <div
      className={cx(
        styles.grid,
        { [styles.fillAvailableSpace]: fullWidth },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};
