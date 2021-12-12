import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//react markdown fir styling project description
import ReactMarkdown from 'react-markdown';

import { RiInformationLine } from 'react-icons/ri';
import { FaNodeJs, FaReact, FaJs, FaJava } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const {
    title,
    tech,
    mainTech,
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

  //prevent scrolling on main page when modal is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <>
      <Wrapper>
        <img src={imageUrl} alt={title} />
        <div className='tech-icon'>
          {mainTech === 'React' ? (
            <FaReact style={{ color: 'rgb(94,218,250)' }} />
          ) : mainTech === 'Node' ? (
            <FaNodeJs style={{ color: 'rgb(64,133,64)' }} />
          ) : mainTech === 'JS' ? (
            <FaJs style={{ color: 'rgb(252,220,42)' }} />
          ) : (
            <FaJava style={{ color: 'rgb(255,0,22)' }} />
          )}
        </div>
        <div onClick={() => openModal()} className='info-background'>
          <RiInformationLine className='zoom-icon' />
        </div>
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
            <div className='modal-desc'>
              <ReactMarkdown>{shortDesc}</ReactMarkdown>
            </div>
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
              {website && (
                <a
                  className='modal-button'
                  href={website}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {mainBtn}
                </a>
              )}
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
    margin: 5% auto;
    padding: 20px;
    border-radius: 1rem;
    max-width: calc(var(--max-width) + 10%);
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
    width: 70%;
    text-align: left;
    margin: 1rem auto 0 auto;

    p {
      text-align: justify;
    }

    ul {
      margin: 0.75rem 0px;
      padding-left: 1rem;
    }

    ul > li {
      list-style-type: disc;
    }
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
    font-size: 0.8rem;
    width: auto;
    background-color: var(--clr-tag-background);
    padding: 0.25rem 1rem 0.25rem 1rem;
    border-radius: 1rem;
    color: var(--clr-tag-text);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
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
  height: 150px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  &:hover .info-background {
    opacity: 1;
    transform: scale(1.2);
  }
  .tech-icon {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2rem;
    padding: 0.4rem;
    transform: translate(0.2rem, 0.2rem);
    background-color: rgba(246, 246, 246, 0.9);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
  .tech-icon svg {
    display: block;
    opacity: 1;
  }
  .info-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    transition: 0.5s;
    cursor: pointer;
  }
  .zoom-icon {
    position: absolute;
    font-size: 3rem;
    opacity: 0.7;
    color: var(--clr-white-1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
