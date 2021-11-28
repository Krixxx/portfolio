import React, { useEffect } from 'react';
import styled from 'styled-components';

import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import js from '../assets/img/js.png';
import react from '../assets/img/react.png';
import node from '../assets/img/node.png';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Wrapper id='about' className='section-center'>
      <div className='icon-carousel' data-aos='zoom-in'>
        <ul className='list'>
          <li>
            <img src={html} alt='html' />
          </li>
          <li>
            <img src={css} alt='css' />
          </li>
          <li>
            <img src={js} alt='js' />
          </li>
          <li>
            <img src={react} alt='react' />
          </li>
          <li>
            <img src={node} alt='node' />
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;

  .icon-carousel {
    margin-top: 1rem;
    text-align: center;
  }

  .icon-carousel li {
    height: 3rem;
  }
  .icon-carousel img {
    height: 100%;
  }
  .list {
    width: auto;
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    .icon-carousel li {
      height: 5rem;
    }
  }
`;

export default About;
