import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";
import { Fade } from "react-reveal";
export const Footer = () => {
  return (
    <Row id="footer-section">
      <Col className="my-3">
        <Fade>
          <footer>
            <p className="footer-text my-auto">
              Made with ❤️{" "}
              <a
                href="https://doesryankavanaughlooklikeharveyweinstein.com/"
                style={{
                  textDecoration: "none",
                  color: "var(--main-accent4-color)",
                }}
              >
                and
              </a>{" "}
              ☕ by Rares Dinu
            </p>
          </footer>
        </Fade>
      </Col>
    </Row>
  );
};
