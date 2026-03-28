import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiMacos,
  SiDocker,
  SiGitlab,
  SiKibana,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <p style={{ fontSize: "20px" }}>IntelliJ</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "20px" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "20px" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p style={{ fontSize: "20px" }}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <p style={{ fontSize: "20px" }}>GitLab</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKibana />
        <p style={{ fontSize: "20px" }}>Kibana</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <p style={{ fontSize: "20px" }}>macOS</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
