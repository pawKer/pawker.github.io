import React from "react";
import { Col, Row } from "react-bootstrap";

export const Projects = () => {
  return (
    <Row style={{ backgroundColor: "lightseagreen" }}>
      <Row className="section-title">
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mx-auto section-border"></div>
        </Col>
      </Row>
    </Row>
  );
};
