import React from 'react';
import { Container } from 'react-bootstrap';

function LocationMap() {
  return (
    <section id="location" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Gdzie nas znaleźć</h2>
        <div className="map-responsive" style={{ overflow: 'hidden', paddingBottom: '56.25%', position: 'relative', height: 0 }}>
          <iframe
            title="Lokalizacja szkoły makaronu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.576212708377!2d21.0175328158236!3d52.2296757797884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc4f9f8b2d0f%3A0x50198caab32c4d0!2sWarszawa!5e0!3m2!1spl!2spl!4v1685828702304!5m2!1spl!2spl"
            width="600"
            height="450"
            style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
  );
}

export default LocationMap;
