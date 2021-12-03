import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper id='contact' className='section-center'>
      <h1 className='title'>Contact</h1>
      <div className='separator' />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
`;

export default Contact;
