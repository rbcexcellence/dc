import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
      } else {
        navbar.style.backgroundColor = 'var(--black)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.jpeg" alt="Dushi's Coiffeur Logo" />
          </Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/services" className={isActive('/services')} onClick={closeMenu}>Dienstleistungen</Link></li>
          <li><Link to="/about" className={isActive('/about')} onClick={closeMenu}>Über Uns</Link></li>
          <li><Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Kontakt</Link></li>
          <li>
            <a 
              href="https://connect.shore.com/bookings/dushi-s-coiffeur/services?locale=de" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline"
              onClick={closeMenu}
            >
              Termin buchen
            </a>
          </li>
        </ul>
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
