import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Dushi's Coiffeur</h3>
            <p>Ihr Friseursalon in Winterthur</p>
          </div>
          <div className="footer-col">
            <h3>Schnelllinks</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Dienstleistungen</Link></li>
              <li><Link to="/about">Über Uns</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Kontakt</h3>
            <p>Wülflingerstrasse 38<br />8400 Winterthur<br />+41 76 447 41 80</p>
          </div>
          <div className="footer-col">
            <h3>Folgen Sie uns</h3>
            <div className="social-links">
              <a href="https://instagram.com/dushis.coiffeur" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://tiktok.com/@dushiscoiffeur" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Dushi's Coiffeur. Alle Rechte vorbehalten.</p>
          <div className="footer-links">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/agb">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
