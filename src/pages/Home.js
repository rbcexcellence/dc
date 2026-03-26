import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ '--hero-logo-url': "url('/logonb.png')" }}
      >
        <div className="hero-content">
          <h1>Willkommen bei Dushi's Coiffeur</h1>
          <p>Ihr Friseursalon in Winterthur</p>
          <div className="hero-buttons">
            <a href="https://connect.shore.com/bookings/dushi-s-coiffeur/services?locale=de" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Jetzt Termin buchen
            </a>
            <Link to="/services" className="btn-secondary">Unsere Dienstleistungen</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-section">
        <div className="container">
          <h2>Unsere Dienstleistungen</h2>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-cut"></i>
              <h3>Haarschnitte</h3>
              <p>Professionelle Schnitte für Herren, Damen und Kinder</p>
            </div>
            <div className="service-card">
              <i className="fas fa-spa"></i>
              <h3>Bartpflege</h3>
              <p>Professionelle Bartpflege und Styling</p>
            </div>
            <div className="service-card">
              <i className="fas fa-eye"></i>
              <h3>Augenbrauen</h3>
              <p>Professionelles Augenbrauen zupfen und formen</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn-primary">Alle Dienstleistungen</Link>
          </div>
        </div>
      </section>

      <section className="services-section social-access-section">
        <div className="container">
          <h2>Kontakt & Social Media</h2>
          <div className="social-access-grid">
            <a
              href="https://wa.me/41764474180"
              target="_blank"
              rel="noopener noreferrer"
              className="service-card social-access-card"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
              <h3>WhatsApp</h3>
              <p>Direkter Kontakt für schnelle Fragen</p>
              <span className="social-access-hint">Jetzt öffnen →</span>
            </a>
            <a
              href="https://instagram.com/dushis.coiffeur"
              target="_blank"
              rel="noopener noreferrer"
              className="service-card social-access-card"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
              <h3>Instagram</h3>
              <p>Aktuelle Looks und Salon-Einblicke</p>
              <span className="social-access-hint">Jetzt öffnen →</span>
            </a>
            <a
              href="https://tiktok.com/@dushiscoiffeur"
              target="_blank"
              rel="noopener noreferrer"
              className="service-card social-access-card"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok"></i>
              <h3>TikTok</h3>
              <p>Videos, Trends und Transformationen</p>
              <span className="social-access-hint">Jetzt öffnen →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2>Besuchen Sie uns</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card">
                <i className="fas fa-map-marker-alt"></i>
                <h3>Adresse</h3>
                <p>Wülflingerstrasse 38<br />8400 Winterthur</p>
              </div>
              <div className="info-card">
                <i className="fas fa-phone"></i>
                <h3>Telefon</h3>
                <p>+41 76 447 41 80</p>
              </div>
              <div className="info-card">
                <i className="fas fa-clock"></i>
                <h3>Öffnungszeiten</h3>
                <p>Mo-Fr: 09:00 - 19:30<br />Sa: 08:00 - 18:00<br />So: Geschlossen</p>
              </div>
            </div>
          </div>

          {/* Map and Directions */}
          <div className="home-map-section">
            <div className="home-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.192936533621!2d8.7171749!3d47.5056337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa31ff3693cc9%3A0xd88140f4480dbdfb!2sDushi%E2%80%98s%20Coiffeur!5e0!3m2!1sde!2sch!4v1773341894449!5m2!1sde!2sch"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dushi's Coiffeur Standort"
              ></iframe>
            </div>
            <div className="home-directions-info">
              <h3>Anfahrt</h3>
              <div className="directions-detail">
                <i className="fas fa-bus"></i>
                <div>
                  <strong>Bus</strong>
                  <p>Haltestelle "Hinterwiesli" - Linie 2</p>
                </div>
              </div>
              <div className="directions-detail">
                <i className="fas fa-train"></i>
                <div>
                  <strong>Zug</strong>
                  <p>Bahnhof Winterthur - ca. 10 Minuten zu Fuss</p>
                </div>
              </div>
              <div className="directions-detail">
                <i className="fas fa-parking"></i>
                <div>
                  <strong>Parkplätze</strong>
                  <p>Parkplätze sind vor dem Salon verfügbar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
