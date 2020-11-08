import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { Grid } from '../../Components';
import { Input, TextArea } from './Components';

import styles from './styles.module.css';

import { useFormSetup } from './hooks';

const Form = ({ id = 'contactForm', name = 'sentMessage', ...rest }) => {
  const [onChange, handleSubmit, response] = useFormSetup({
    name: '',
    email: '',
    message: '',
  });

  return (
    <form {...{ id, name }} onSubmit={handleSubmit}>
      <Grid>
        <Input id="Name" type="text" onChange={onChange} />
        <Input id="Email" type="email" onChange={onChange} />
      </Grid>
      <TextArea id="Message" onChange={onChange} />
      {response ? <span className={styles.response}>{response}</span> : null}

      <Button type="submit" className="btn btn-custom btn-lg">
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
