import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/binay_profile.jpeg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate Backend Engineer with{" "}
              <i>
                <b className="purple">3.5+ years of experience</b>
              </i>{" "}
              building scalable, secure, and high-availability systems for{" "}
              <i>
                <b className="purple">Fintech and SaaS platforms.</b>
              </i>
              <br />
              <br />
              My core expertise lies in
              <i>
                <b className="purple"> Java, Spring Boot, REST APIs, </b>
              </i>
              and
              <i>
                <b className="purple"> PostgreSQL</b>
              </i>
              , with hands-on experience in
              <i>
                <b className="purple"> Docker, Kubernetes, and AWS.</b>
              </i>
              <br />
              <br />
              I have delivered real-money transaction systems, KYC pipelines,
              booking engines, and large-scale third-party integrations — things
              that need to work{" "}
              <b className="purple">reliably, at scale, every time.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/binaygupta10"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/binay-gupta-1ba191191/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/user3929hZ/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
