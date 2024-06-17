import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiJava,
  DiGithubFull,
  DiHtml5
} from "react-icons/di";
import {
  SiFirebase,
  SiPostgresql,
  SiSpring,
  SiSwagger
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava /> <p style={{fontSize:"30px"}}>Java</p>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> <p style={{fontSize:"30px"}}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><p style={{fontSize:"30px"}}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><p style={{fontSize:"30px"}}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><p style={{fontSize:"30px"}}>Mongo DB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase /><p style={{fontSize:"30px"}}>Fire Base</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /><p style={{fontSize:"30px"}}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><p style={{fontSize:"30px"}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubFull /><p style={{fontSize:"30px"}}>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /><p style={{fontSize:"30px"}}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring /><p style={{fontSize:"30px"}}>Spring Boot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger /><p style={{fontSize:"30px"}}>Swagger</p>
      </Col>
    </Row>
  );
}

export default Techstack;
