import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <Wrapper id='projects' className='section-center'>
      <h1 className='title'>Latest works</h1>
      <div className='separator' />
      <br />
      <p className='projects-text'>
        Here is the portfolio of latest projects I've finished. Each project has
        a link to github and a link to a website (where possible).
      </p>
      <div className='projects-center'>
        {/* single product */}
        <article className='project'></article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
`;

export default Projects;
