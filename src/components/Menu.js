import React, { useState } from 'react';
import '../styles/Menu.css'
import NavItem from './NavItem';
const Menu = (props) => {
  const [aria, setAria] = useState("false")
  const [show, setShow] = useState("collapse navbar-collapse")
  
const home = (<span>Pagina Inicial</span>);
const about = (<span>Sobre Nós</span>);
const contact = (<span>Contato</span>);
const blog = (<span>Blog</span>);
  const handleOnClick = () => {
    if(aria === "false"){
      setAria("true")
      setShow("collapse navbar-collapse show")
    } else {
      setAria("false")
      setShow("collapse navbar-collapse")
    }
  }

  return (


<nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Omni-Portal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded={aria} onClick={()=> handleOnClick()}  aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={show} id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <NavItem name={home} reference={"/"} active={props.page === "home" ? "active" : ""}/>
        <NavItem name={about} reference={"/about"} active={props.page === "about" ? "active" : ""}/>
        <NavItem name={contact} reference={"/contact"} active={props.page === "contact" ? "active" : ""}/>
        <NavItem name={blog} reference={"/blog"} active={props.page === "blog" ? "active" : ""}/>
      </ul>
    </div>
  </div>
</nav>


  );
}

export default Menu;
