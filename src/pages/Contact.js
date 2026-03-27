import React from 'react';

const Contact = () => {
  // FormSubmit handles the form directly - no state management needed

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Kontakt</h1>
          <p>Schreiben Sie uns oder rufen Sie uns an</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-page">
        <div className="container">
          <div className="contact-container">
            <div className="contact-form-section">
              <h2>Schreiben Sie uns</h2>
              <form action="https://formsubmit.co/info@dushicoiffeur.ch" method="POST">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="Neue Kontaktanfrage von Dushi Coiffeur Website" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={`${window.location.origin}/contact/danke`} />
                <input type="text" name="_honey" style={{display: 'none'}} />
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-Mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">Nachricht senden</button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Kontaktinformationen</h2>
              
              <div className="contact-detail">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Adresse</h3>
                  <p>Wülflingerstrasse 38<br />8400 Winterthur<br />Schweiz</p>
                </div>
              </div>

              <div className="contact-detail">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Telefon</h3>
                  <p>+41 76 447 41 80</p>
                </div>
              </div>

              <div className="contact-detail">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>E-Mail</h3>
                  <p>info@dushicoiffeur.ch</p>
                </div>
              </div>

              <div className="contact-detail">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>Öffnungszeiten</h3>
                  <p>
                    Montag - Freitag: 09:00 - 19:30<br />
                    Samstag: 08:00 - 18:00<br />
                    Sonntag: Geschlossen
                  </p>
                </div>
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

export default Contact;
