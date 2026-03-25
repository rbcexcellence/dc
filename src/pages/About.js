import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: 'fas fa-award',
      title: 'Qualität',
      description: 'Professionelle Produkte und saubere Arbeit'
    },
    {
      icon: 'fas fa-heart',
      title: 'Erfahrung',
      description: 'Team mit langjähriger Praxis'
    },
    {
      icon: 'fas fa-users',
      title: 'Service',
      description: 'Beratung und individuelle Lösungen'
    },
    {
      icon: 'fas fa-star',
      title: 'Transparenz',
      description: 'Klare Preise, keine versteckten Kosten'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Über uns</h1>
          <p>Ihr Friseursalon in Winterthur</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content-section">
        <div className="container">
          <div className="about-text">
            <h2>Über den Salon</h2>
            <p>
              Wir bieten professionelle Haarschnitte, 
              Färbungen und Styling für Damen und Herren.
            </p>
            <p>
              Unser Team arbeitet mit modernen Techniken und achtet auf Qualität. 
              Termine können telefonisch oder online gebucht werden.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <i className={value.icon}></i>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '4rem' }}>
            <a 
              href="https://connect.shore.com/bookings/dushi-s-coiffeur/services?locale=de" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Termin vereinbaren
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
