import { useState } from 'react';

export const useFormSetup = (formValues = {}) => {
  const [state, setState] = useState(formValues);

  const [errorMessage, setError] = useState(null);
  const [successMessage, setSuccess] = useState(null);

  const onChange = (input) => (e) => {
    const { value } = e.target;
    if (errorMessage) {
      setError(null);
    }
    setState((prevState) => ({ ...prevState, [input]: value }));
  };

  const onSubmit = (info) => {
    setSuccess('Thanks 🚀');
    console.log('🤪', { info });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(state).some((v) => !v)) {
      console.log('🤥');
      setError('Looks like you forgot something 👀');
      return;
    }

    if (!errorMessage) onSubmit(state);
  };

  const response = errorMessage || successMessage;

  return [onChange, handleSubmit, response];
};

export const joinString = (value) => value.toLowerCase().split(' ').join('');
