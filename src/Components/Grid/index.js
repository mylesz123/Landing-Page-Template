import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.css';

export default function Grid({
  children,
  className,
  fullWidth = false,
  gap = 1,
  ...rest
}) {
  return (
    <div
      className={cx(
        styles.grid,
        { [styles.fillAvailableSpace]: fullWidth },
        className
      )}
      style={{
        gap: `${gap}rem`,
      }}
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
  gap: PropTypes.number,
};
