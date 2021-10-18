import styled from 'styled-components';
import logo from '../assets/img/logo.svg';

const Navbar = () => {
  const linkClick = () => {
    // TODO smooth scroll
  };

  return (
    <Wrapper>
      <div className='nav-header'>
        <div className='nav-logo'>
          <img className='logo' src={logo} alt='kristjan logo' />
        </div>
      </div>
      <div className='nav-links'>
        <ul className='links'>
          <li>
            <a href='#about' onClick={linkClick}>
              About
            </a>
          </li>
          <li>
            <a href='#projects' onClick={linkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' onClick={linkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 90%;
  margin: 10px auto;
  display: flex;
  align-items: center;

  .nav-header {
    flex: 2;
  }
  .nav-links {
    flex: 1;
  }
  .links {
    display: flex;
    justify-content: space-around;
  }
  .links li a {
    color: #5f5f79;
    font-size: 18px;
    margin: 0px 0px 0px 15px;
  }
  .nav-logo {
    height: 50px;
  }
  .nav-logo img {
    height: 100%;
  }
`;

export default Navbar;
