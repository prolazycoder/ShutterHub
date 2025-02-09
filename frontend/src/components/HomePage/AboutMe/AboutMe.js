import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const AboutMe = () => {
  return (
    <section className="py-5 bg-light"> {/* Plain backdrop */}
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="text-center shadow-sm border-0 p-4 bg-white">
              <Card.Body>
                {/* Avatar */}
                <img
                  src="https://via.placeholder.com/150" // Replace with your photo
                  alt="Vaibhav Sinha"
                  className="rounded-circle mb-3"
                  width="120"
                  height="120"
                />
                
                {/* Name & Title */}
                <h2 className="fw-bold">Vaibhav Sinha</h2>
                <h5 className="text-muted">Software Development Engineer (SDE) Aspirant</h5>

                {/* Description */}
                <p className="text-muted mt-3">
                  Passionate about building scalable applications, solving real-world problems, 
                  and writing clean, efficient code. Currently looking for opportunities as an SDE.
                </p>

                {/* Social Links */}
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <a href="https://linkedin.com/in/yourprofile" className="text-primary fs-4">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/yourgithub" className="text-dark fs-4">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="mailto:your.email@example.com" className="text-danger fs-4">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
