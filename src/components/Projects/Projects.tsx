import React, { Suspense } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";
import vidifyStatic from "../../assets/vidify-static.jpg";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { projects } from "../../config/projects";
import Fade from "react-reveal/Fade";
import "./Projects.css";
export const Projects = () => {
  return (
    <Row id="projects-section" className="py-5">
      <Col className="mx-auto" lg={6}>
        <Fade distance={"2vh"} left>
          <Row className="section-title project-title">
            <Col>
              <h1>Projects</h1>
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
        <Fade distance={"5vh"} bottom>
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
        </Fade>
      </Col>
    </Row>
  );
};
