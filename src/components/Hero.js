import styled from 'styled-components';

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <h1>Front-end Developer</h1>
      <p>I code web apps with great interest and I do not stop learning.</p>
      <p></p>
      {/* image */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
`;

export default Hero;
