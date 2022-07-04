import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import WPAPI from "wpapi";
import "./Blog.css";
import { RecentPosts } from "./RecentPosts";
export const Blog = () => {
  const wp = new WPAPI({ endpoint: "https://blog.raresdinu.ro/wp-json" });
  const [blogPosts, setBlogPosts]: any = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (blogPosts.length === 0) {
      setIsLoading(true);
      wp.posts()
        .get()
        .then((resp) => {
          setIsError(false);
          setBlogPosts(resp);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, []);

  return (
    <Row id="blog-section" className="py-5">
      <Col className="mx-auto" lg={6}>
        <Fade distance={"2vh"} left>
          <Row className="section-title blog-title">
            <Col>
              <h1>Blog</h1>
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

        <Row className="g-3 mx-auto mt-5 blog-paragraph">
          <RecentPosts
            isError={isError}
            isLoading={isLoading}
            blogPosts={blogPosts}
          />
        </Row>
      </Col>
    </Row>
  );
};
