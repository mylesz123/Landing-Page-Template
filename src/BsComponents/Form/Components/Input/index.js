import React from 'react';
import PropTypes from 'prop-types';

import { joinString } from '../../hooks';

const Input = ({ id, type = 'text', onChange = () => {}, ...rest }) => (
  <div className="form-group">
    <input
      type={type}
      id={joinString(id)}
      className="form-control"
      placeholder={id}
      onChange={onChange(joinString(id))}
      {...rest}
      // required
    />
  </div>
);

Input.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default Input;
