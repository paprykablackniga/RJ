import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function HomeSection() {
  return (
    <section id="home"  className=" italian-background">
      <Container>
       
        <h2 className="mb-4 text-center">Witaj w świecie makaronów włoskich!</h2>
        <p className="lead text-center mb-5">
          Odkryj smak tradycyjnej włoskiej kuchni. Makaron to nie tylko jedzenie – to historia, pasja i kultura na Twoim talerzu.
        </p>
        <div className="text-center mb-5">
  <button
    className="btn btn-primary btn-lg"
    onClick={() => {
      const element = document.getElementById('pasta-types');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    Dowiedz się więcej
  </button>
</div>
       
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="img/spaghetti.jpg" />
              <Card.Body>
                <Card.Title>Spaghetti</Card.Title>
                <Card.Text>
                  Klasyczny włoski makaron – cienkie, długie nitki idealne do sosów pomidorowych.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="img/penne.jpg" />
              <Card.Body>
                <Card.Title>Penne</Card.Title>
                <Card.Text>
                  Krótkie rurki, które świetnie łapią sos – doskonałe do kremowych i warzywnych dań.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src="img/fussili.jpg" />
              <Card.Body>
                <Card.Title>Fusilli</Card.Title>
                <Card.Text>
                  Spiralny makaron, który doskonale zatrzymuje smak sosów i składników.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeSection;
