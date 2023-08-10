import React from 'react';
import '../styles/Menu.css'
const Menu = () => {
  return (
    <nav className='menu'>
      <ul>
        <li><a href="/">Página Inicial</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/servicos">Serviços</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
