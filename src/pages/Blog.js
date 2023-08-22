import React from 'react';
import '../styles/Home.css'
import Menu from '../components/Menu';


import PorcaoPlena from '../components/PorcaoPlena';
const Blog = () => {

  return (
    <div>
    <header>
      <Menu page={'blog'} />
    </header>
    <div className='home'>
       <PorcaoPlena header={"Filho Pródigo"} content={'/teste.txt'} audio={'audioteste.ogg'} data={"21.08.2023"} />
    </div>
    </div>
  );
}

export default Blog;