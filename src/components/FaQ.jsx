import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

function FaqAccordion() {
  return (
    <section id="faq" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4 text-center">Najczęstsze pytania</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Czy kurs jest odpowiedni dla początkujących?</Accordion.Header>
            <Accordion.Body>
              Tak! Kurs został stworzony z myślą o osobach, które nigdy nie robiły makaronu – krok po kroku nauczysz się wszystkiego.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Jak długo trwa kurs?</Accordion.Header>
            <Accordion.Body>
              Kurs składa się z 6 modułów i trwa łącznie około 4 godzin wideo + materiały PDF.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Czy dostanę certyfikat?</Accordion.Header>
            <Accordion.Body>
              Tak, po ukończeniu kursu otrzymasz certyfikat ukończenia w formacie PDF.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Jak mogę zapłacić za kurs?</Accordion.Header>
            <Accordion.Body>
              Obsługujemy płatności kartą, BLIK, PayPal oraz przelewem bankowym.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default FaqAccordion;
