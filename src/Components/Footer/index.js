import React from 'react';
import styles from './styles.module.css';

import Box from '../Box';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Box>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Twitter{' '}
        </a>
      </Box>
      <Box>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Google{' '}
        </a>
      </Box>
      <Box>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Facebook{' '}
        </a>
      </Box>
    </footer>
  );
}
