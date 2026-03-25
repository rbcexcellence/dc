import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <section className="page-header">
        <div className="container">
          <h1>404</h1>
          <p>Diese Seite wurde nicht gefunden.</p>
        </div>
      </section>

      <section className="content-page">
        <div className="container">
          <div className="content-box" style={{ textAlign: 'center' }}>
            <h2>Ups, hier gibt es nichts.</h2>
            <p>
              Der Link ist möglicherweise veraltet oder die Seite wurde verschoben.
            </p>
            <Link to="/" className="btn-primary">Zur Startseite</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
