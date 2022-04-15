import * as React from "react";
import { Home } from "../components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container } from "react-bootstrap";
import { About } from "../components/About/About";
import { Footer } from "../components/Footer/Footer";
import { Projects } from "../components/Projects/Projects";
import { LinkNavbar } from "../components/LinkNavbar/LinkNavbar";
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from "react-helmet";
import config from "../../gatsby-config";

const IndexPage = () => {
  return (
    <Container fluid>
      <Helmet>
        <title>{config.siteMetadata.title}</title>
      </Helmet>
      <Home></Home>
      <LinkNavbar></LinkNavbar>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
      <ScrollToTop smooth color="#E39834" />
    </Container>
  );
};

export default IndexPage;
