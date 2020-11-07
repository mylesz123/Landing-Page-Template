import React, { useState } from 'react';
import PropTypes from 'prop-types';
// https://www.npmjs.com/package/@fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import Grid from '../Grid';

import styles from './styles.module.css';

// example from https://www.chrisberry.io/Animate-Auto-With-React-Spring/
const Item = ({ children, summary = 'Some Accordion Text' }) => {
  // Manages the open or closed state of the accordion
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionContainer}>
      <Grid className={styles.summaryWrapper}>
        <summary>{summary}</summary>
        <Button type="secondary" className={styles.expand} onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faChevronDown} />
        </Button>
      </Grid>

      <p className={!isOpen ? 'visuallyHidden' : ''}>{children}</p>
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.node,
  summary: PropTypes.string,
};

/**
 * Don’t use the Accordion if there is not enough content to for shrinking.
 * Accordions increase mental load and should be using sparingly because users have to make decisions about what to interact with.
 */
const Accordion = ({ children, summary = '' }) => (
  <ul className={styles.accordionContainer}>
    {/* so we don't have to use keys on mapped elements */}
    {React.Children.map(children, (child) => (
      <Item summary={summary}>{child}</Item>
    ))}
  </ul>
);

Accordion.propTypes = {
  children: PropTypes.node,
  summary: PropTypes.string,
};

export default Accordion;
