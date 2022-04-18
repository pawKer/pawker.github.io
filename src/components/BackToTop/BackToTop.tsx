import React, { useState } from "react";
import { Link } from "react-scroll";
import { ArrowUp } from "react-bootstrap-icons";
import "./BackToTop.css";
export const BackToTop = () => {
  const [topButtonVisible, setTopButtonVisible] = useState(false);
  const scrollFunction = () => {
    if (typeof window !== "undefined") {
      if (
        document.body.scrollTop > window.innerHeight + 63 ||
        document.documentElement.scrollTop > window.innerHeight + 63
      ) {
        setTopButtonVisible(true);
      } else {
        setTopButtonVisible(false);
      }
    }
  };
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
    window.onload = function () {
      scrollFunction();
    };
  }
  return (
    <Link
      activeClass="active"
      to="about-section"
      spy={true}
      smooth={true}
      duration={500}
      offset={-63}
    >
      <button
        className={"p-2 topButton " + (topButtonVisible ? "on" : "off")}
        title="Go to top"
      >
        <i aria-hidden="true">
          <ArrowUp />
        </i>
      </button>
    </Link>
  );
};
