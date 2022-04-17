import React from "react";
import { Col, Row } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { projects } from "../../config/projects";
import { Fade } from "react-reveal";
import "./Projects.css";
export const Projects = () => {
  return (
    <Row id="projects-section" className="py-5">
      <Col className="mx-auto" lg={6}>
        <Fade distance={"20px"} left>
          <Row className="section-title project-title">
            <Col>
              <h1>Projects</h1>
            </Col>
          </Row>
        </Fade>
        <Fade distance={"20px"} right>
          <Row>
            <Col>
              <div className="mx-auto section-border"></div>
            </Col>
          </Row>
        </Fade>

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
            <Fade key={projInfo.name} bottom distance="5vh">
              <ProjectCard key={projInfo.name} {...projInfo} />
            </Fade>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
