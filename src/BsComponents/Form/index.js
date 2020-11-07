import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { Grid } from '../../Components';

const FormComponent = ({ name, error, type, ...rest }) => {
  const joinString = (value) => value.toLowerCase().split(' ').join('');
  return (
    <div className="form-group">
      <input
        type={type || joinString(name)}
        id={joinString(name)}
        className="form-control"
        placeholder={name}
        {...rest}
        // required
      />
      {error ? <p className="help-block text-danger" /> : null}
    </div>
  );
};

FormComponent.propTypes = {
  error: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
};

const Form = ({ id = 'contactForm', name = 'sentMessage', ...rest }) => {
  // update this later with the code from KCD form validation
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form {...{ id, name }} onSubmit={handleSubmit}>
      <Grid>
        <div className="form-group">
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Name"
            required="required"
          />
          <p className="help-block text-danger" />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            required="required"
          />
          <p className="help-block text-danger" />
        </div>
      </Grid>
      <div className="form-group">
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="4"
          placeholder="Message"
          required
        />
        <p className="help-block text-danger" />
      </div>
      <div id="success" />
      <Button
        type="submit"
        className="btn btn-custom btn-lg"
        onClick={onSubmit}
      >
        Send Message
      </Button>
    </form>
  );
};

Form.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Form;
