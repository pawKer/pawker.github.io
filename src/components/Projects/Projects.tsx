import React, { Suspense } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import vidifyStatic from "../../assets/vidify-static.jpg";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { projects } from "../../config/projects";
import "./Projects.css";
export const Projects = () => {
  return (
    <Row id="projects-section" className="py-5">
      <Col className="mx-auto" lg={6}>
        <Row className="section-title project-title">
          <Col>
            <h1>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mx-auto section-border"></div>
          </Col>
        </Row>
        <Row
          className="g-3 mx-auto mt-5"
          xs={1}
          sm={2}
          md={2}
          lg={2}
          xl={2}
          xxl={3}
        >
          {projects.map((projInfo) => (
            <ProjectCard key={projInfo.name} {...projInfo} />
          ))}
        </Row>
      </Col>
    </Row>
  );
};
