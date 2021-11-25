import React from 'react';

//Mode select icons
import { BsSunFill } from 'react-icons//bs';
import { BsMoonFill } from 'react-icons/bs';

const ThemeSelector = ({ theme, toggleTheme }) => {
  return (
    <>
      <button className='mode-btn' onClick={toggleTheme}>
        {theme === 'light-theme' ? (
          <BsMoonFill className='moon-icon' />
        ) : (
          <BsSunFill className='sun-icon' />
        )}
      </button>
    </>
  );
};

export default ThemeSelector;
