import React, { useRef } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { Fade } from "react-reveal";
import { getRandomNumberInRange } from "../../config/utils";
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

  const particlesBgIndex = useRef(
    getRandomNumberInRange(0, particlesConfig.length - 1)
  );
  console.log("Using particles: ", particlesBgIndex);
  return (
    <div>
      <Row className={"blur-overlay"}></Row>
      <Row
        id="particlesContainer"
        className={"full-page"}
        style={{ textAlign: "center" }}
      >
        <Particles options={particlesConfig[particlesBgIndex.current]} />
      </Row>

      <Row style={{ textAlign: "center" }}>
        <Row className={"mx-auto header"}>
          <Fade>
            <Row>
              <Col>
                <Image
                  id="repulse-div"
                  src={"./assets/images/profile.jpg"}
                  className={"profile-image"}
                  alt={"Rares Dinu's profile picture"}
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
                      "StackOverflow Specialist",
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
                  <Github className={"m-2 link-icon"} />
                </a>
                <a href={socialLinks.linkedin}>
                  <Linkedin className={"m-2 link-icon"} />
                </a>
                <a href={"mailto:" + socialLinks.email}>
                  <Envelope className={"m-2 link-icon"} />
                </a>
              </Col>
            </Fade>
          </Row>
        </Row>
        <Row className={"mx-auto scroll-down"}>
          <Fade>
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
          </Fade>
        </Row>
      </Row>
    </div>
  );
};
