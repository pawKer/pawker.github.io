import React from "react";
import { Col, Spinner } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./Blog.css";
export const RecentPosts = ({ isError, isLoading, blogPosts }: any) => {
  if (isError)
    return (
      <Fade distance={"2vh"} left>
        <Col>
          <p>
            Check out{" "}
            <a
              href="https://blog.raresdinu.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              my tech blog
            </a>{" "}
            👀.
          </p>
        </Col>
      </Fade>
    );
  if (isLoading)
    return (
      <Col>
        <Spinner animation="border" className="custom-spinner" />
      </Col>
    );
  return (
    <Fade distance={"2vh"} left>
      <Col className="mt-0">
        <p>Check out my most recent articles below 👀</p>

        {blogPosts.slice(0, 5).map((post: any) => (
          <h3 key={post.id} className="recent-post">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title.rendered}{" "}
            </a>
          </h3>
        ))}
      </Col>
    </Fade>
  );
};
