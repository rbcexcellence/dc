import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-cut',
      title: 'Haarschnitt Herren',
      duration: '20 Minuten',
      price: 'CHF 28.00'
    },
    {
      icon: 'fas fa-scissors',
      title: 'Haarschnitt Frauen',
      duration: '30 Minuten',
      price: 'CHF 35.00'
    },
    {
      icon: 'fas fa-child',
      title: 'Haarschnitt Kinder (bis 10 Jahre)',
      duration: '20 Minuten',
      price: 'CHF 17.00'
    },
    {
      icon: 'fas fa-child',
      title: 'Haarschnitt (11 bis 13 Jahre)',
      duration: '30 Minuten',
      price: 'CHF 20.00'
    },
    {
      icon: 'fas fa-spa',
      title: 'Bart Pflege',
      duration: '10 Minuten',
      price: 'CHF 10.00'
    },
    {
      icon: 'fas fa-cut',
      title: 'Haarschnitt + Bart',
      duration: '30 Minuten',
      price: 'CHF 38.00'
    },
    {
      icon: 'fas fa-eye',
      title: 'Augenbrauen zupfen',
      duration: '10 Minuten',
      price: 'CHF 10.00'
    },
    {
      icon: 'fas fa-star',
      title: 'Komplettpaket',
      duration: 'Haarschnitt / Bart / Augenbrauen / Haarentfernung Gesicht / Waschen etc. - 1 Stunde',
      price: 'CHF 70.00'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Dienstleistungen & Preise</h1>
          <p>Alle Services im Überblick</p>
        </div>
      </section>

      {/* Services */}
      <section className="services-page">
        <div className="container">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <i className={service.icon}></i>
              <div className="service-details">
                <h3>{service.title}</h3>
                <p>{service.duration}</p>
                <span className="price">{service.price}</span>
              </div>
            </div>
          ))}

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <a 
              href="https://connect.shore.com/bookings/dushi-s-coiffeur/services?locale=de" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Online Termin buchen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
