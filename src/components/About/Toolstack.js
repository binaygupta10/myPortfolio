import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiIntellijidea,
  SiWindows,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos /><p style={{fontSize:"30px"}}>Mac OS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><p style={{fontSize:"30px"}}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><p style={{fontSize:"30px"}}>PostMan</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea /><p style={{fontSize:"30px"}}>IntelliJ</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows /><p style={{fontSize:"30px"}}>Windows</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
