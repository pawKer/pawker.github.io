import * as React from "react";
import { Home } from "../components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container } from "react-bootstrap";
import { About } from "../components/About/About";
import { Footer } from "../components/Footer/Footer";
import { Projects } from "../components/Projects/Projects";
import { LinkNavbar } from "../components/LinkNavbar/LinkNavbar";
import {
  Parallax,
  ParallaxProvider,
  ParallaxBanner,
} from "react-scroll-parallax";

const IndexPage = () => {
  return (
    <Container fluid>
      <Home></Home>
      <LinkNavbar></LinkNavbar>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </Container>
  );
};

export default IndexPage;
