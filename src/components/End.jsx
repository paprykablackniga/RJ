import React from 'react';
import { Container, Button } from 'react-bootstrap';

function CallToAction() {
  return (
    <section className="cta-section text-center">
      <Container>
        <h2 className="mb-3">Gotowy, aby zacząć przygodę z włoskim makaronem?</h2>
        <p className="mb-4 fs-5">Dołącz do naszego kursu i naucz się robić prawdziwy, włoski makaron od podstaw!</p>
        <Button variant="light" size="lg" href="#pricing">
          Zapisz się teraz
        </Button>
      </Container>
    </section>
  );
}

export default CallToAction;
