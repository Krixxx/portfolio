import styled from 'styled-components';
import { Hero, Navbar, About, Projects, Contact } from './components';

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default App;
