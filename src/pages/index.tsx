import * as React from "react";
import { Home } from "../components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container } from "react-bootstrap";
import { About } from "../components/About/About";
import { Footer } from "../components/Footer/Footer";
import { Projects } from "../components/Projects/Projects";

const IndexPage = () => {
  return (
    <Container fluid>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </Container>
  );
};

export default IndexPage;
