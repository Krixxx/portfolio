import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper className='section-center' id='about'>
      <h1>Hello from about</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
`;

export default About;
