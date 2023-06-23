import React from 'react';
import logoImage from './images/sz_logo.JPG';
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
        <a href="#"><img src={GitHub} alt="GitHub Logo" className="header-image" /></a>
        <a href="#"><img src={homeLogo} alt="Home Logo" className="header-image" /></a>
      </div>
    </header>
  );
}

export default Header;