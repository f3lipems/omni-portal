import React from 'react';
import '../styles/Home.css'
import Menu from '../components/Menu';
const Blog = () => {
  return (
    <div>
    <header>
      <Menu page={'blog'} />
    </header>
    <div className='home'>
        Conteúdo do Blog
    </div>
    </div>
  );
}

export default Blog;