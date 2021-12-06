import React from 'react';
import styled from 'styled-components';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterArea>
      <div className='social-icons'>
        <a
          href='https://github.com/Krixxx'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/kristjan-lepik-46905211a/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
      </div>
    </FooterArea>
  );
};

const FooterArea = styled.section`
  margin-top: 1rem;
  .social-icons {
    justify-content: center;
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
  }
  .social-icons svg {
    font-size: 2rem;
    opacity: 0.5;
  }
`;

export default Footer;
