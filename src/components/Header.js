import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper className='section-center' id='about'>
      <h1>Front-end Developer</h1>
      <p>I code web apps with great interest and I do not stop learning.</p>
      <p></p>
      {/* image */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 56px;
  text-align: center;
  height: 150vh;
`;

export default Header;
