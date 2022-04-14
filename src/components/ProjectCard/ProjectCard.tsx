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
        <Card.Body className="card-body">
          <Row>
            <Col className={"mx-auto"} lg={10}>
              {/* <Card.Title className="card-title mb-4">{name}</Card.Title> */}
              <Card.Subtitle className="mb-4" style={{ fontWeight: "bold" }}>
                {description}
              </Card.Subtitle>
              <p>⚡</p>

              <ul>
                {bulletPoints.map((bp) => (
                  <li>{bp}</li>
                ))}
              </ul>
              <Row>
                <Col className="project-links">
                  {links && (
                    <a href={links.github}>
                      <Github className={"proj-link-icon"} size={30} />
                    </a>
                  )}
                  {!links && <Badge bg="danger">Work in progress 🚧</Badge>}
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          {technologies.map((t) => (
            <>
              <Badge bg="secondary">{t}</Badge>{" "}
            </>
          ))}
        </Card.Footer>
      </Card>
    </Col>
  );
};
