import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.css';

const StackLayout = ({ children, className, ...props }) => (
  <div className={cx(styles.stack, className)} {...props}>
    {children}
  </div>
);

StackLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  props: PropTypes.shape({}),
};
export default StackLayout;
