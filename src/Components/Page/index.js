import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Page({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Page.propTypes = {
  children: PropTypes.node,
};
