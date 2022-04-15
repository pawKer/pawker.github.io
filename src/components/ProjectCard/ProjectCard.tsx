import React, { Suspense, useState } from "react";
import { Badge, Card, Col, Row, Spinner } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import "./ProjectCard.css";

export const ProjectCard = ({
  name,
  preview,
  description,
  bulletPoints,
  technologies,
  links,
}) => {
  const [imageSrc, setImageSrc] = useState(preview.static);
  return (
    <Col className="mx-auto mt-3">
      <Card className={"project-card h-100"}>
        <div
          className={"image-wrapper"}
          onMouseEnter={() => setImageSrc(preview.gif)}
          onMouseLeave={() => setImageSrc(preview.static)}
        >
          <Card.Img src={imageSrc} className={"preview"} />
          <div className={"proj-color-overlay"}></div>
          <div className={"proj-blur-overlay"}></div>
          <h1 className="card-title">{name}</h1>
        </div>
        <Row className="p-4 mx-auto h-100">
          <Col className={"mx-auto d-flex flex-column"} lg={10}>
            <Row>
              <Card.Subtitle className="mb-4" style={{ fontWeight: "bold" }}>
                {description}
              </Card.Subtitle>
            </Row>
            <Row>
              <p>⚡</p>
              <ul>
                {bulletPoints.map((bp, index) => (
                  <li key={`bp-${name}-${index}`}>{bp}</li>
                ))}
              </ul>
            </Row>
            <Row className="mt-auto">
              <Col className="project-links">
                {links && (
                  <a href={links.github}>
                    <Github className={"proj-link-icon"} size={30} />
                  </a>
                )}
                {!links && (
                  <Badge
                    style={{ backgroundColor: "#f44336!important" }}
                    bg="danger"
                  >
                    Work in progress 🚧
                  </Badge>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Card.Footer>
          {technologies.map((t, index) => (
            <Badge
              key={`tech-${name}-${index}`}
              className={"tech-badge me-1"}
              bg="secondary"
            >
              {t}
            </Badge>
          ))}
        </Card.Footer>
      </Card>
    </Col>
  );
};
