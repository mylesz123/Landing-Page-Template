import React from 'react';
import PropTypes from 'prop-types';

import { joinString } from '../../hooks';

const TextArea = ({ id, rows = 4, onChange = () => {}, ...rest }) => (
  <div className="form-group">
    <textarea
      name={joinString(id)}
      id={joinString(id)}
      className="form-control"
      rows={rows}
      placeholder={id}
      onChange={onChange(joinString(id))}
      {...rest}
      // required
    />
  </div>
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  rows: PropTypes.number,
};

export default TextArea;
