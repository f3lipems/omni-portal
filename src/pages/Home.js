import React from 'react';
import '../styles/Home.css'
import Menu from '../components/Menu';
const Home = () => {
  return (
    <div>
    <header>
      <Menu page={'home'} />
    </header>
    <div className='home'>
        Conteúdo da Home
    </div>
    </div>
  );
}

export default Home;