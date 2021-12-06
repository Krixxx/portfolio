import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectCard = ({ project }) => {
  const {
    title,
    cardTitle,
    tech,
    shortDesc,
    imageUrl,
    mainBtn,
    website,
    github,
  } = project;

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Wrapper>
        <img onClick={() => openModal()} src={imageUrl} alt={title} />
        {/* <h3 className='card-title'>{cardTitle}</h3> */}
      </Wrapper>
      {open && (
        <Modal className='modal' onClick={() => closeModal()}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <span className='close' onClick={() => closeModal()}>
              &times;
            </span>
            <h1 className='modal-title title'>{title}</h1>
            <div className='separator' />
            <br />
            <div className='modal-image-container'>
              <img className='modal-image' src={imageUrl} alt={title} />
            </div>
            <p className='modal-desc'>{shortDesc}</p>
            <h4 className='modal-subtitle'>Tags</h4>
            <div className='modal-tech-stack-container'>
              {tech.map((item, index) => {
                return (
                  <div key={index} className='modal-tech-item'>
                    {item}
                  </div>
                );
              })}
            </div>
            <div className='modal-button-container'>
              <a
                className='modal-button'
                href={website}
                target='_blank'
                rel='noopener noreferrer'
              >
                {mainBtn}
              </a>
              <a
                className='modal-button'
                href={github}
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

const Modal = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.5s;

  .modal-content {
    background-color: var(--clr-timeline-background);
    margin: 15% auto;
    padding: 20px;
    border-radius: 1rem;
    max-width: var(--max-width);
    width: 80%;
  }
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .modal-image-container {
    text-align: center;
  }
  .modal-image {
    width: 80%;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  }
  .modal-desc {
    margin-top: 1rem;
  }
  .modal-subtitle {
    font-size: 1.5rem;
    padding-top: 1rem;
    font-weight: 400;
    text-align: center;
  }
  .modal-tech-stack-container {
    display: flex;
    align-items: center;
    width: 80%;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin: 0.5rem auto 0.75rem auto;
    margin-bottom: 50px;
  }
  .modal-tech-item {
    font-size: 0.75rem;
    width: auto;
    background-color: var(--clr-tag-background);
    padding: 0.25rem 1rem 0.25rem 1rem;
    border-radius: 1rem;
    color: var(--clr-tag-text);
  }
  .modal-button-container {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  .modal-button {
    padding: 0.25rem 1rem 0.25rem 1rem;
    border: 1px solid var(--clr-primary);
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: var(--clr-primary);
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

const Wrapper = styled.article`
  position: relative;
  width: 250px;
  border-radius: 5px;
  overflow: hidden;
  background-color: var(--clr-timeline-background);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  .card-title {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;

export default ProjectCard;
