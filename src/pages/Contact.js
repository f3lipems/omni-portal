import React from 'react';
import '../styles/Home.css'
import Menu from '../components/Menu';
const Contact = () => {
  return (
    <div>
    <header>
      <Menu page={'contact'} />
    </header>
    <div className='home'>
        Conteúdo para Contato
    </div>
    </div>
  );
}

export default Contact;