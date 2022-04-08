import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";
import { GeoAlt } from "react-bootstrap-icons";
export const About = () => {
  return (
    <Row id="about-section">
      <Col>
        <Row className="section-title">
          <Col>
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mx-auto section-border"></div>
          </Col>
        </Row>
        <Row className="mt-5 about-paragraph">
          <Col className="mx-auto" lg={3}>
            <Row>
              <h2 className="about-subtitle">Who am I?</h2>
              <p>I'm Rares 😀</p>
              <p>
                👉 I'm a software engineer from Romania currently working on
                Java backend.
              </p>
              <p>
                👉 Outside of work I like to play with React, TypeScript and
                Python.
              </p>
              <p>
                👉 I also love playing with hardware like Arduino and
                RaspberryPi.
              </p>
              <div className="ml-auto location-border"></div>
            </Row>
            <Row>
              <Col className="about-location">
                <GeoAlt /> <span>Manchester, UK</span>
              </Col>
            </Row>
          </Col>
          <Col className="mx-auto" lg={3}>
            <p>👉 Software engineer from blah blah</p>
            <p>👉 Software engineer from blah blah</p>
            <p>👉 Software engineer from blah blah</p>
            <div className="mx-auto location-border"></div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
