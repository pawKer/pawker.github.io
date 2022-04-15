import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <Row id="footer-section">
      <Col className="my-3">
        <footer>
          <p className="footer-text my-auto">
            Made with ❤️ and ☕ by Rares Dinu
          </p>
        </footer>
      </Col>
    </Row>
  );
};
