import React, { Suspense } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import "./About.css";
import { GeoAlt } from "react-bootstrap-icons";
import { ThreePlay } from "../ThreePlay/ThreePlay";
import { Fade } from "react-reveal";
export const About = () => {
  return (
    <Row id="about-section" className="py-5">
      <Col className="mx-auto" lg={10}>
        <Fade distance={"2vh"} left>
          <Row className="section-title">
            <Col>
              <h1>About</h1>
            </Col>
          </Row>
        </Fade>
        <Fade distance={"2vh"} right>
          <Row>
            <Col>
              <div className="mx-auto section-border"></div>
            </Col>
          </Row>
        </Fade>
        <Fade>
          <Row className="mt-5 about-paragraph">
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
              <Suspense fallback={<Spinner animation="border" />}>
                <ThreePlay></ThreePlay>
              </Suspense>
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto" lg={5}></Col>
            <Col className="mx-auto" lg={5}>
              <div className="interact-text">Interact with me ☝</div>
            </Col>
          </Row>
        </Fade>
      </Col>
    </Row>
  );
};
