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
import { ArrowUp } from "react-bootstrap-icons";

const IndexPage = () => {
  return (
    <Container fluid>
      <ScrollToTop
        smooth
        component={<ArrowUp style={{ textAlign: "center" }} />}
        top={300}
        style={{
          color: "#E39834",
          backgroundColor: "#EDE8D4",
          zIndex: 100,
          textAlign: "center",
          verticalAlign: "middle",
        }}
      />
      <Helmet>
        <title>{config!.siteMetadata!.title as string}</title>
      </Helmet>
      <Home></Home>
      <LinkNavbar></LinkNavbar>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </Container>
  );
};

export default IndexPage;
