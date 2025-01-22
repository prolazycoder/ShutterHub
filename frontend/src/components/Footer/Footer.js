import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; // Import the CSS file

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="footer-section">
            <h5>About Us</h5>
            <p>
              ShutterHub is your go-to platform for the best photography gear and resources.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="footer-section">
            <h5>Contact Us</h5>
            <p>Email: support@shutterhub.com</p>
            <p>Phone: +1 234 567 890</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p className="footer-text">© 2025 ShutterHub. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}


