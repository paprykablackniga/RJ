import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ContactForm() {
  return (
    <section id="kontakt" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Skontaktuj się z nami</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Imię</Form.Label>
            <Form.Control type="text" placeholder="Wpisz swoje imię" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Wpisz swój email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Wiadomość</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Wpisz swoją wiadomość" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Wyślij
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default ContactForm;
