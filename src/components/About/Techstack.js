import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiJava } from "react-icons/di";
import {
  SiSpring,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiHibernate,
  SiSwagger,
  SiJunit5,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ fontSize: "20px" }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        <p style={{ fontSize: "20px" }}>Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{ fontSize: "20px" }}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{ fontSize: "20px" }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p style={{ fontSize: "20px" }}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <p style={{ fontSize: "20px" }}>Kubernetes</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p style={{ fontSize: "20px" }}>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate />
        <p style={{ fontSize: "20px" }}>Hibernate</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "20px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "20px" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJunit5 />
        <p style={{ fontSize: "20px" }}>JUnit</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
        <p style={{ fontSize: "20px" }}>Swagger</p>
      </Col>
    </Row>
  );
}

export default Techstack;
