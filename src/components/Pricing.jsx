import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Pricing() {
  const plans = [
    {
      name: 'Podstawowy',
      price: '199 PLN',
      features: [
        'Podstawy robienia makaronu',
        '3 godziny lekcji',
        'Materiały w PDF',
      ],
      variant: 'primary',
    },
    {
      name: 'Zaawansowany',
      price: '349 PLN',
      features: [
        'Zaawansowane techniki',
        '6 godzin lekcji',
        'Materiały + video',
        'Wsparcie online',
      ],
      variant: 'success',
    },
    {
      name: 'Profesjonalny',
      price: '599 PLN',
      features: [
        'Pełny kurs + certyfikat',
        '12 godzin lekcji',
        'Indywidualne konsultacje',
        'Dostęp do społeczności',
      ],
      variant: 'warning',
    },
  ];

  return (
    <section id="pricing" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Cennik kursów</h2>
        <Row>
          {plans.map(({ name, price, features, variant }, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{name}</Card.Title>
                  <h3 className={`text-center text-${variant} my-3`}>{price}</h3>
                  <ul className="list-unstyled flex-grow-1">
                    {features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        ✔️ {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="d-grid">
                    <Button variant={variant} size="lg">
                      Zapisz się
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Pricing;
