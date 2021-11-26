import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { ThemeSelector } from '../components';
import logo from '../assets/img/apple-touch-icon.png';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <Wrapper>
      <div className='nav-container section-center'>
        <div className='nav-logo'>
          <a href='/'>
            <img src={logo} alt='logo' />
          </a>
        </div>
        <ul className='nav-items'>
          <li>
            <Link
              to='home'
              className='single-link'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-65}
              duration={400}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='about'
              className='single-link'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-65}
              duration={400}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='projects'
              className='single-link'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-65}
              duration={400}
            >
              Projects
            </Link>
          </li>
          <li>
            <ThemeSelector theme={theme} toggleTheme={toggleTheme} />
          </li>
        </ul>
      </div>
      <div className='blur-bar'></div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }
  .nav-logo {
    height: 2rem;
  }
  .nav-logo img {
    height: 100%;
  }
  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-items li {
    margin-left: calc(1rem * (1));
  }
  .single-link {
    transition: color 0.5s;
    cursor: pointer;
  }
  .active {
    color: var(--clr-primary);
  }
  .blur-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 65px;
    backdrop-filter: blur(10px);
  }
`;

export default Navbar;
