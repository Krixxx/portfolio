import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper className='section-center'>
      Hello dear Delisa!
      <div className='first-fill'></div>
      More content here!!!
      <div className='second-fill'></div>
      some more content!!!
      <div className='first-fill'></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .first-fill {
    height: 40vh;
    background-color: red;
  }
  .second-fill {
    height: 40vh;
    background-color: green;
  }
`;

export default Home;
