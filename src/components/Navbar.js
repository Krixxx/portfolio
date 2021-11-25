import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ThemeSelector } from '.';
import logo from '../assets/img/apple-touch-icon.png';

import { links } from '../data';

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
          {links.map((link) => {
            const { id, url, text } = link;

            return (
              <li key={id}>
                <NavLink to={url}>{text}</NavLink>
              </li>
            );
          })}
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
    z-index: 1;
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
  .blur-bar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 65px;
    backdrop-filter: blur(10px);
  }
`;

export default Navbar;
