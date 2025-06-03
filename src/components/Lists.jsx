import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

function CourseHighlightsList() {
  const highlights = [
    'Poznasz tradycyjne włoskie przepisy.',
    'Nauczysz się robić makaron ręcznie od podstaw.',
    'Dowiesz się, jak tworzyć własne sosy i dodatki.',
    'Otrzymasz certyfikat ukończenia kursu.',
  ];

  // Stan, który będzie przechowywał które elementy są widoczne
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Animujemy pojawianie się elementów kolejno co 300ms
    highlights.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * 1000);
    });
  }, [highlights]);

  return (
    <section id="course-highlights" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Co nauczysz się na kursie</h2>
        <ListGroup variant="flush" className="mx-auto" style={{ maxWidth: '600px' }}>
          {highlights.map((item, idx) => (
            <ListGroup.Item
              key={idx}
              className={`d-flex align-items-center fade ${visibleItems.includes(idx) ? 'show' : ''}`}
              style={{ fontSize: '1.1rem', transition: 'opacity 0.5s ease-in-out' }}
            >
              <FaCheckCircle className="text-success me-3" size={24} />
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </section>
  );
}

export default CourseHighlightsList;
