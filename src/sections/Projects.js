import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from '../components';

import { projects } from '../data';

const Projects = () => {
  return (
    <Wrapper id='projects' className='section-center'>
      <h1 className='title'>Projects</h1>
      <div className='separator' />
      <br />
      <p>
        Here are some of my projects. For real-life use and also for learning
        purposes.
      </p>
      <br />
      <div className='projects-container'>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .projects-container {
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  p {
    text-align: center;
  }
`;

export default Projects;
