import React from 'react';
import { Link } from 'react-router-dom';

const ContactThanks = () => {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>Danke!</h1>
          <p>Ihre Nachricht wurde erfolgreich gesendet.</p>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="contact-container">
            <div className="contact-form-section">
              <h2>Wir melden uns zeitnah</h2>
              <p>
                Vielen Dank für Ihre Anfrage. Wir werden Ihre Nachricht so schnell wie möglich beantworten.
              </p>
              <div style={{ marginTop: '1rem' }}>
                <Link to="/" className="btn-primary">Zur Startseite</Link>
              </div>
            </div>

            <div className="contact-info-section">
              <h2>Kontakt</h2>
              <p>
                Falls es dringend ist, rufen Sie uns gerne direkt an:
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                <strong>Telefon:</strong> +41 76 447 41 80
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactThanks;
