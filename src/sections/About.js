import React, { useEffect } from 'react';
import styled from 'styled-components';

import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import js from '../assets/img/js.png';
import react from '../assets/img/react.png';
import node from '../assets/img/node.png';

import { Link } from 'react-scroll';

// import react icons for timeline
import { IoSchoolOutline, IoAppsOutline } from 'react-icons/io5';

// import timeline data
import { timeLineElements } from '../data';

// import timeline library
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const studyIconStyles = {
    background: '#ad8',
  };
  const appIconStyles = {
    background: '#fbe04b',
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Wrapper id='about' className='section-center'>
      <h1 className='title'>About</h1>
      <div className='separator' />
      <br />
      <div className='about-text'>
        <p>A software developer from Tallinn, Estonia.</p>
        <br />
        <p>
          I have been (self) studying programming since <span>2019</span> and
          web app development since <span>2020</span>.
        </p>
        <br />
        <p>
          When it comes to programming, I'm most fascinated by the limitless
          possibilities of creating any imaginable solutions. I'm always open to
          new knowledge and want to develop into a very strong software
          developer.
        </p>
        <br />
        <p>
          My very first programming language was <span>Java</span>. First 'hello
          world' app I made in Android Studio. I studied Android development
          over a year and finally decided to expand my knowledge and get more
          familiar with web app creation. In order to expand my skills and
          abilities, I have studied front- and back-end web development. It
          began with <span>Html</span> and <span>CSS</span>, followed by
          <span> JavaScript</span>. I am also studying <span>React JS</span> as
          front-end framework, <span>Node JS</span> and <span>Express</span> as
          back-end.
        </p>
        <br />
        <p>
          During my short career as a developer, I have completed many study
          projects as well as real-life projects, some of which are still in
          daily use today. As I am professionally involved in production
          processes, my projects have also been primarily focused on improving
          production processes - Production notification program as well as
          warehouse goods receipt and delivery program.
        </p>
        <br />
        <p>
          Today I learn and program in addition to my main job, but my goal is
          to find a job as a full-time software developer.
        </p>
      </div>
      <br />
      <h3 className='sub-title'>Technologies I've been working with:</h3>
      {/* <div className='icon-carousel' data-aos='zoom-in'> */}
      <div className='separator' />

      <div className='icon-carousel'>
        <ul className='list'>
          <li>
            <img src={html} alt='html' />
          </li>
          <li>
            <img src={css} alt='css' />
          </li>
          <li>
            <img src={js} alt='js' />
          </li>
          <li>
            <img src={react} alt='react' />
          </li>
          <li>
            <img src={node} alt='node' />
          </li>
        </ul>
      </div>
      <h3 className='sub-title'>Noticeable events:</h3>
      <VerticalTimeline className='timeline' animate={false}>
        {timeLineElements.map((element) => {
          let isStudyIcon = element.icon === 'study';
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== '';
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName='element-date'
              iconStyle={isStudyIcon ? studyIconStyles : appIconStyles}
              icon={isStudyIcon ? <IoSchoolOutline /> : <IoAppsOutline />}
            >
              <h3 className='vertical-timeline-element-title'>
                {element.title}
              </h3>
              <h5 className='vertical-timeline-element-subtitle'>
                {element.subtitle}
              </h5>
              <p id='description'>{element.description}</p>
              {showButton && (
                <Link
                  className={`button ${
                    isStudyIcon ? 'study-button' : 'app-button'
                  }`}
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={-65}
                  duration={400}
                >
                  {element.buttonText}
                </Link>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 3rem;

  .intro {
    text-align: center;
  }
  .sub-title {
    font-weight: 400;
    text-align: center;
    margin: 2rem auto 1rem auto;
  }

  .about-text p {
    font-size: 1rem;
    text-align: justify;
  }
  .about-text span {
    color: var(--clr-primary);
    font-weight: 400;
  }

  .icon-carousel {
    margin: 2rem 0 1rem 0;
  }

  .icon-carousel li {
    height: 50px;
  }
  .icon-carousel img {
    height: 100%;
  }
  .list {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
  }

  /* TIMELINE */

  .timeline {
    /* overflow: hidden; */
  }
  .vertical-timeline {
    width: 100%;
  }
  h3 {
    padding-top: 0.25em;
    color: var(--clr-font-primary);
  }
  .vertical-timeline-element-content {
    background-color: var(--clr-timeline-background);
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
    padding: 1.25em 2em !important;
    border-radius: 0.75em;
  }
  .vertical-timeline-element-content-arrow {
    border-right: 7px solid var(--clr-timeline-background);
  }
  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px var(--clr-timeline-background);
  }
  .vertical-timeline::before {
    background: var(--clr-timeline-background);
  }
  #description {
    margin: 1.5em 0 2em 0;
    /* font-weight: 100; */
  }
  .button {
    text-decoration: none;
    padding: 0.5em 1em;
    border-radius: 5px;
    background-color: transparent;
    color: var(--clr-font-primary);
    border: 2px solid;
    transition: all 0.4s;
    cursor: pointer;
  }

  .study-button {
    border-color: rgb(98, 211, 164);
  }
  .study-button:hover {
    background-color: rgb(98, 211, 164);
  }
  .app-button {
    border-color: rgb(251, 224, 75);
  }
  .app-button:hover {
    background-color: rgb(251, 224, 75);
  }

  @media screen and (min-width: 768px) {
    .about-text p {
      font-size: 1.15rem;
    }

    .icon-carousel li {
      height: 60px;
    }
    .element-date {
      margin: 0 1rem;
    }
    .timeline {
      margin-top: 2rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .vertical-timeline-element-date {
      display: block;
      float: none;
      margin-top: 1em;
    }
  }
`;

export default About;
