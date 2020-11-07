import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.css';

const FlexLayout = ({ children, className, ...rest }) => (
  <div className={cx(styles.flex, className)} {...rest}>
    {children}
  </div>
);

FlexLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FlexLayout;
