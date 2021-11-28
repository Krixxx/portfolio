import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper id='home'>
      <div className='hero'>
        <h1>
          Hello, I'm <span>Kristjan</span>.
        </h1>
        <h1>I'm a self-taught front-end web developer.</h1>
        <Link
          to='projects'
          className='hero-btn'
          spy={true}
          smooth={true}
          offset={-65}
          duration={400}
        >
          View my work
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  justify-content: center;

  .hero {
    text-align: center;

    animation: text-in 2s both var(--bezier);
    animation-delay: 250ms;
  }
  h1 {
    font-size: 1.5rem;
    transition: font-size 0.4s;
    font-weight: 100;
  }
  span {
    color: var(--clr-primary);
    font-weight: 400;
  }
  .hero-btn {
    display: inline-block;
    margin-top: 10px;
    padding: 15px;
    color: var(--clr-font-primary);
    font-family: var(--font-primary);
    font-size: 1rem;
    background-color: transparent;
    border: 2px solid var(--clr-primary);
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.4s;
    cursor: pointer;

    animation: text-in 2s both var(--bezier);
    animation-delay: 500ms;
  }
  .hero-btn:hover {
    background-color: var(--clr-primary);
  }

  @keyframes text-in {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }

    100% {
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export default Hero;
