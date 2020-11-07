import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

// card sizes need to reasonable shrink when we get to small screens since this is so widely used
export default function Card({ heading, subheading, children }) {
  return (
    <div className={styles.card}>
      <h3>{heading}</h3>
      {subheading && <h4>{subheading}</h4>}
      <p>{children}</p>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
  subheading: PropTypes.string,
};
