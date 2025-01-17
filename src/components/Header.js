import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='header-container'>
        <div className='header flex justify-between items-center'>
          <div className='branding flex gap-5 items-center'>
            <h1 className='logo'>DT</h1>
            <h2 className='email'>thangavelraja36@gmail.com</h2>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='*' className='nav-item'>Services</Link>
            <Link to='!' className='nav-item'>About</Link>
            <Link to='a' className='nav-item'>Projects</Link>
            <Link to='c' className='nav-item'>Contact</Link>
          </div>
          <button className='hire-me-btn'>HIRE ME!</button>
          <div className='menu-icon' onClick={toggleMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
