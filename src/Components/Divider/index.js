import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';

export default function Divider({ size }) {
  return (
    <Box className="divider" size={size}>
      <div />
    </Box>
  );
}

Divider.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
