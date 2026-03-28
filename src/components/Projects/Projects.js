import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import blog from "../../Assets/Projects/blog.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="The Royal Bride"
              description="A bridal and party makeup artist landing page for a Kolkata-based artist. Features an image slider, service showcase, and contact section — built with pure HTML, CSS, and JavaScript."
              ghLink="https://github.com/binaygupta10/the_royal_bride"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="CloudQuora"
              description="A front-end Q&A web application inspired by Quora, built for college communities. Features a home feed and question listing interface using HTML, CSS, and TypeScript."
              ghLink="https://github.com/binaygupta10/cloudQuora"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="A Python automation tool to send bulk WhatsApp messages with images and text — useful for broadcasting information to large groups quickly."
              ghLink="https://github.com/binaygupta10/image-and-text-message-in-whatsapp-using-python"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
