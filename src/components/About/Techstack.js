import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiMysql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus aria-label="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava aria-label="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <DiHtml5 aria-label="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <DiCss3 aria-label="CSS3" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="SQL">
        <SiMysql aria-label="SQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 aria-label="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython aria-label="Python" />
      </Col>
    </Row>
  );
}

export default Techstack;
