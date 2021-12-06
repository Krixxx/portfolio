import React from 'react';
import styled from 'styled-components';

import { ContactForm } from '../components';

const Contact = () => {
  return (
    <Wrapper id='contact' className='section-center'>
      <h1 className='title'>Contact</h1>
      <div className='separator' />
      <br />
      <p>
        I am very interested and eager to learn and evolve in web development.
        Both in front- and back-end.
      </p>
      <p>
        Please contact me, if you have any questions or you wish to work
        together.
      </p>
      <ContactForm />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Contact;
