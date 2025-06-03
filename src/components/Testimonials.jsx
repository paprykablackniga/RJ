import React from 'react';
import { Carousel, Container } from 'react-bootstrap';


function Testimonials() {
  const reviews = [
    {
      author: 'Anna Nowak',
      text: 'Najlepszy makaron, jaki jadłam poza Włochami! Smak prawdziwej Italii.',
      bg: 'https://source.unsplash.com/1200x500/?pasta'
    },
    {
      author: 'Marek Kowalski',
      text: 'Pachniało bazylią i świeżym parmezanem... coś wspaniałego!',
      bg: 'https://source.unsplash.com/1200x500/?italian-food'
    },
    {
      author: 'Julia Włoska',
      text: 'Włoskie dania jak u mojej nonny. Polecam każdemu!',
      bg: 'https://source.unsplash.com/1200x500/?spaghetti'
    },
  ];

  return (
    <section id="opinie" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Opinie Gości</h2>
        <Carousel controls={true} indicators={false} fade={true}>
          {reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <div
                className="testimonial-slide d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundImage: `url(${review.bg})`,
                }}
              >
                <div className="overlay"></div>
                <blockquote className="blockquote z-1">
                  <p className="mb-4 fs-4">“{review.text}”</p>
                  <footer className="blockquote-footer text-white-50">{review.author}</footer>
                </blockquote>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Testimonials;
