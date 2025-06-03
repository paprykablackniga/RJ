import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaFire, FaCheese } from 'react-icons/fa'; // musisz zainstalować react-icons: npm install react-icons

function PastaTypes() {
  return (
    <section id="pasta-types" className="py-5 italian-background">

      <Container>
      <h2 className="mb-2 text-center">Rodzaje makaronów</h2>
        <Row>
        <Col md={4} className="mb-2">
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaLeaf size={50} className="mb-3 text-success" />
                <Card.Title>Makaron wegetariański</Card.Title>
                <Card.Text>Świeże, zdrowe makarony z warzywami i lekkimi sosami.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-2">
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaFire size={50} className="mb-3 text-danger" />
                <Card.Title>Makaron pikantny</Card.Title>
                <Card.Text>Dla miłośników ostrości i wyrazistych smaków.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-2">
            <Card className="h-100 text-center shadow-sm">
              <Card.Body>
                <FaCheese size={50} className="mb-3 text-warning" />
                <Card.Title>Makaron serowy</Card.Title>
                <Card.Text>Kremowe, serowe sosy, które rozpływają się w ustach.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PastaTypes;
