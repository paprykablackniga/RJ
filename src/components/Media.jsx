import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function Media() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">© {new Date().getFullYear()} Kurs Włoskiego Makaronu</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" className="text-light" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Media;
