import React from 'react';
import '../styles/Home.css'
import Menu from '../components/Menu';
const About = () => {
  return (
    <div>
    <header>
      <Menu page={'about'} />
    </header>
    <div className='home'>
        Conteúdo sobre nós
    </div>
    </div>
  );
}

export default About;