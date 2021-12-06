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
  };

  const [state, handleSubmit] = useForm('xknynwkz');

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor='email'>E-mail</label>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='please enter e-mail address'
        value={contact.email}
        onChange={handleChange}
        required
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <label htmlFor='message'>Message</label>
      <textarea
        id='message'
        name='message'
        rows='3'
        placeholder='type your message here'
        value={contact.message}
        onChange={handleChange}
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <label htmlFor='check'>Please check checkbox to send message!</label>
      <input name='check' type='checkbox' onChange={handleChecked} />
      <button type='submit' disabled={state.submitting || !checked}>
        Submit
      </button>
      {state.succeeded && <p>Your email has been sent!</p>}
    </Form>
  );
};

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea {
    max-width: 50%;
  }

  button {
    max-width: 10rem;
  }
`;

export default ContactForm;
