import * as React from "react";
import { Home } from "../components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container } from "react-bootstrap";
import { About } from "../components/About/About";
import { Footer } from "../components/Footer/Footer";
import { Projects } from "../components/Projects/Projects";
import { LinkNavbar } from "../components/LinkNavbar/LinkNavbar";
import { Helmet } from "react-helmet";
import config from "../../gatsby-config";
import BackToTop from "../components/BackToTop/BackToTop";

const IndexPage = () => {
  return (
    <Container fluid>
      <Helmet>
        <title>{config!.siteMetadata!.title as string}</title>
      </Helmet>
      <BackToTop />
      <Home></Home>
      <LinkNavbar></LinkNavbar>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </Container>
  );
};

export default IndexPage;
