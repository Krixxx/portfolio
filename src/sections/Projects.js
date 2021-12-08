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
        Here are some of my projects. Made for real-life use and also for
        learning purposes. Most biggest project is social media app, where I
        coded front-end and also back-end.
      </p>
      <p> Click on images for more information.</p>
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
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  p {
    text-align: center;
  }
`;

export default Projects;
