import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <Row id="footer-section">
      <Col>
        <footer>
          <p className="footer-text">Made with ❤️ and ☕ by Rares Dinu</p>
        </footer>
      </Col>
    </Row>
  );
};
