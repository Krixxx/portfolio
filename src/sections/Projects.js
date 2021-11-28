import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <Wrapper id='projects' className='section-center'>
      <h1>This is Project section</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  text-align: center;
  h1 {
    padding-top: 1rem;
  }
`;

export default Projects;
