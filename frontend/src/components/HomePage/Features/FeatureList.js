import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const features = [
  {
    id: 1,
    icon: "fas fa-shipping-fast text-primary",
    title: "Fast & Free Shipping",
    description: "Get your products delivered within 2-5 business days at no extra cost!",
  },
  {
    id: 2,
    icon: "fas fa-lock text-success",
    title: "Secure Payments",
    description: "We use end-to-end encryption to ensure safe and secure transactions.",
  },
  {
    id: 3,
    icon: "fas fa-headset text-danger",
    title: "24/7 Customer Support",
    description: "Need help? Our support team is available 24/7 to assist you.",
  },
  {
    id: 4,
    icon: "fas fa-tags text-warning",
    title: "Best Prices Guaranteed",
    description: "We offer the best prices for top-quality products.",
  },
  {
    id: 5,
    icon: "fas fa-sync-alt text-info",
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days of purchase.",
  },
  {
    id: 6,
    icon: "fas fa-star text-secondary",
    title: "Top-Rated Products",
    description: "Handpicked products with high ratings and great reviews.",
  },
];

export function FeatureList() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Why Shop With Us?</h2>
        <Row className="g-4">
          {features.map((feature) => (
            <Col md={4} sm={6} key={feature.id}>
              <Card className="text-center shadow-sm border-0 p-4 h-100">
                <Card.Body>
                  <i className={`${feature.icon} fa-3x mb-3`}></i>
                  <Card.Title className="fw-bold">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

