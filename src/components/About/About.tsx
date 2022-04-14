import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";
import { GeoAlt } from "react-bootstrap-icons";
import { ThreePlay } from "../ThreePlay/ThreePlay";
export const About = () => {
  return (
    <Row id="about-section">
      <Col className="mx-auto" lg={10}>
        <Row className="section-title mt-5">
          <Col>
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mx-auto section-border"></div>
          </Col>
        </Row>
        <Row className="my-5 about-paragraph">
          <Col className="mx-auto" lg={5}>
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
              <p>
                My up-to-date work experience and education background can be
                found on my LinkedIn.{" "}
              </p>
              <div className="ml-auto location-border"></div>
            </Row>
            <Row className="mt-2">
              <Col className="about-location">
                <GeoAlt /> <span>Manchester, UK</span>
              </Col>
            </Row>
          </Col>
          <Col className="mx-auto" lg={5}>
            <ThreePlay></ThreePlay>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
