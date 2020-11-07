import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.css';

export default function Center({ children, totallyCentered, ...rest }) {
  return (
    <div
      className={cx(styles.container, {
        [styles.totallyCentered]: totallyCentered,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}

Center.propTypes = {
  children: PropTypes.node,
  totallyCentered: PropTypes.bool,
};
