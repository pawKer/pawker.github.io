import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import profile from "../../images/profile.jpeg";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import "./Home.css";
import {
  ChevronDown,
  Linkedin,
  Github,
  Envelope,
  VolumeUp,
} from "react-bootstrap-icons";
import Particles from "react-tsparticles";
import { particlesConfig } from "../../config/particlesConfig";
import { socialLinks } from "../../config/info";
import useSound from "use-sound";
import mySound from "../../assets/full-name.mp3";

export const Home = () => {
  const [playSound] = useSound(mySound);
  console.log(mySound);
  return (
    <div>
      <Row className={"blur-overlay"}></Row>
      <Row
        id="particlesContainer"
        className={"full-page"}
        style={{ textAlign: "center" }}
      >
        <Particles options={particlesConfig} />
      </Row>

      <Row style={{ textAlign: "center" }}>
        <Row className={"mx-auto header"}>
          <Fade>
            <Row>
              <Col>
                <Image
                  id="repulse-div"
                  src={profile}
                  className={"profile-image"}
                ></Image>
              </Col>
            </Row>
            <Row>
              <Col className={"intro-text"}>
                <p>
                  Hello, I'm{" "}
                  <a className={"highlighted-text"} onClick={() => playSound()}>
                    <span>Rares Dinu</span>
                    <span>
                      <u>
                        <VolumeUp className={"speaker-icon"} />
                      </u>
                    </span>
                  </a>
                  ! <span className={"wave-emoji"}>👋</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className={"intro-subtitle"}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.pauseFor(5000).start();
                  }}
                  options={{
                    strings: [
                      "Software Engineer",
                      "Expert Googler",
                      "StackOverflow Connoisseur",
                      "My Family's IT Expert",
                    ],
                    autoStart: true,
                    loop: true,
                    cursor: '<span class="elementToFadeInAndOut"> <</span>',
                    skipAddStyles: true,
                  }}
                />
              </Col>
            </Row>
          </Fade>
          <Row className={"mx-auto mt-5"}>
            <Fade>
              <Col>
                <a href={socialLinks.github}>
                  <Github className={"m-2 link-icon"} size={50} />
                </a>
                <a href={socialLinks.linkedin}>
                  <Linkedin className={"m-2 link-icon"} size={50} />
                </a>
                <a href={"mailto:" + socialLinks.email}>
                  <Envelope className={"m-2 link-icon"} size={50} />
                </a>
              </Col>
            </Fade>
          </Row>
        </Row>
        <Row className={"mx-auto scroll-down"}>
          <Col>
            <Link
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <ChevronDown />
            </Link>
          </Col>
        </Row>
      </Row>
      {/* <Row
        style={{ height: "100vh", backgroundColor: "lightskyblue" }}
        name="test1"
      >
        <Col>
          <h1>2nd Row</h1>
        </Col>
      </Row>
      <Row style={{ height: "20vh", backgroundColor: "lightcyan" }}>
        <Col>
          <h1>3rd Row</h1>
        </Col>
      </Row>
      <Row style={{ height: "20vh", backgroundColor: "lightseagreen" }}>
        <Col>
          <h1>4th Row</h1>
        </Col>
      </Row> */}
    </div>
  );
};
