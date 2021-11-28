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
    background: '#06D6A0',
  };
  const appIconStyles = {
    background: '#f9c74f',
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Wrapper id='about' className='section-center'>
      <h1 className='about-title'>About</h1>
      <div className='icon-carousel' data-aos='zoom-in'>
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
      {/* <div className='about-txt'>
        <p>I've been learning programming since July 2019.</p>
        <p>I started with Android development (Java and Kotlin).</p>
        <p>
          I have always liked creating products. With programming - the results
          were quite fast to show. After basic learning I made some smaller apps
          and I also made specific warehouse management app for a company where
          I work.
        </p>
        <p>
          At the beginning of 2020 I started learning basic html/css and
          Javascript.
        </p>
        <p>
          After completing the JavaScript course in Udemy, I practiced new
          knowledges by doing some basic websites. One of the most interesting
          project I had, was doing website for real-estate development company.
        </p>
        <p>
          I decided to move to JavaScript library when I had decent
          understanding and feel of vanilla JS. I picked React JS.
        </p>
        Since then I have done smaller projects, including production
        notification application for a company.
        <p>
          In October 2021 I learned Node/Express for back-end programming. I
          made social media website to practice full MERN stack.
        </p>
      </div> */}
      <VerticalTimeline className='timeline'>
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
  h1 {
    padding-top: 1rem;
    text-align: center;
  }

  .icon-carousel {
    margin: 1rem 0 1rem 0;
    text-align: center;
  }

  .icon-carousel li {
    height: 60px;
  }
  .icon-carousel img {
    height: 100%;
  }
  .list {
    display: flex;
    gap: 1rem;
    justify-content: center;
    /* border: 2px solid var(--clr-primary); */
  }

  /* TIMELINE */

  .timeline {
    overflow: hidden;
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
    border-color: rgb(241, 201, 100);
  }
  .app-button:hover {
    background-color: rgb(241, 201, 100);
  }

  @media screen and (min-width: 768px) {
    /* .icon-carousel li {
      height: 5rem;
    } */
    .element-date {
      margin: 0 1rem;
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
