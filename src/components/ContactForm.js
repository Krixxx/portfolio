import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [contact, setContact] = useState({
    email: '',
    message: '',
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const handleChecked = () => {
    setChecked(!checked);
  };

  const clearData = () => {
    setContact({
      email: '',
      message: '',
    });
    setChecked(false);
  };

  const [state, handleSubmit] = useForm('xknynwkz');

  return (
    <Form onSubmit={handleSubmit}>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='E-mail'
        value={contact.email}
        onChange={handleChange}
        className='form-input'
        required
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <textarea
        id='message'
        name='message'
        rows='4'
        placeholder='Message'
        value={contact.message}
        onChange={handleChange}
        className='form-input'
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <div className='checkbox-container'>
        <input
          name='check'
          type='checkbox'
          id='checkbox'
          checked={checked}
          onChange={handleChecked}
        />
        <label htmlFor='check'>Please check checkbox to send message!</label>
      </div>
      <button
        type='submit'
        className='btn submit-btn'
        disabled={state.submitting || !checked}
      >
        Submit
      </button>
      {state.succeeded && (
        <p className='success-msg'>Your email has been sent!</p>
      )}
      {state.errors.length > 0 && (
        <p className='error-msg'>Something went wrong :(</p>
      )}
    </Form>
  );
};

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  input,
  textarea {
    max-width: 80%;
  }

  .form-input {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    background: var(--clr-grey-4);
    border-radius: 5px;
  }
  .form-input::placeholder {
    font-family: var(--font-primary);
    color: var(--clr-grey-1);
  }
  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .submit-btn {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .success-msg {
    padding: 0.75rem;
    border: none;
    border-radius: 5px;
    background-color: var(--clr-green-2);
  }
`;

export default ContactForm;
