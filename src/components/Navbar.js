import React from 'react';
import styled from 'styled-components';
import { ThemeSelector } from '.';

import { links } from '../data';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <Wrapper>
      <div className='nav-container section-center'>
        <div className='nav-logo'>Kristjan</div>
        <ul className='nav-items'>
          {links.map((link) => {
            const { id, url, text } = link;

            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
          <li>
            <ThemeSelector theme={theme} toggleTheme={toggleTheme} />
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-logo {
  }
  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-items li {
    margin-left: calc(1rem * (1));
  }
`;

export default Navbar;
