import React from 'react';
import logoImage from './images/sz_logo.png';
import GitHub from './images/github_logo.png';
import homeLogo from './images/homepage_logo.png';
import './Header.css';


function Header() {
  return (
    <header className="header-footer">
      <div className="logo">
       <img src={logoImage} alt="Logo" className="header-image" />
      </div>
      <div className="clickable-images">
        <a href="https://github.com/samanthaz123?tab=repositories"><img src={GitHub} alt="GitHub Logo" className="header-image" /></a>
        <a href="https://main.d3tho6lmagqpj5.amplifyapp.com/"><img src={homeLogo} alt="Home Logo" className="header-image" /></a>
      </div>
    </header>
  );
}

export default Header;
