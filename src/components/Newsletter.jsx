import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Newsletter() {
  return (
    <section id="newsletter" className="py-5">
      <Container className="text-center">
        <h2 className="mb-3">Zapisz się na przepisy!</h2>
        <Form className="d-flex justify-content-center">
          <Form.Control
            type="email"
            placeholder="Twój email"
            className="me-2 w-50"
          />
          <Button variant="success">Zapisz się</Button>
        </Form>
      </Container>
    </section>
  );
}

export default Newsletter;