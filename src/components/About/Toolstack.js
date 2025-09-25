import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiAtlassian,
  SiApache,
  SiOracle,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size={50} aria-label="VS Code" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiOracle size={50} aria-label="NetBeans" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman size={50} aria-label="Postman" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiApache size={50} aria-label="Apache JMeter" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAtlassian size={50} aria-label="JIRA" />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub size={50} aria-label="GitHub" />
      </Col>
    </Row>
  );
}

export default Toolstack;
