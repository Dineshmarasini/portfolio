import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Dinesh Marasini CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="QA Engineer and Translator| Upwork"
              date="May 2022 - present"
              content={[
                "Involving both short-term and long-term projects related to website and software testing and English-Nepali translation.",
                "I have managed to score a 100% job success score with the Rising Talent badge on this platform.",
              ]}
            />
            <Resumecontent
              title="Data Operation Analyst | Straive"
              date="Nov 2023 - July 2024"
              content={[
                " I have served as a Data Operations Analyst at Straive, contributing remotely.",
                "My responsibilities encompass Data Quality Assurance and research data management. Also, work on the PEPs research live data."
              ]}
            />
            <Resumecontent
              title="Test Automation and QA | Kreesa"
              date="Dec 2021 - Feb 2023"
              content={[
                " I have worked with a professional developer to design, develop, and implement automated and manual testing procedures",
                " Worked with tools like Apache JMeter for performance and Load testing"
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Technical Lead [Girlscript Surat]"
              date="March 2020 - present"
              content={[
                "As a Part of Community, we arrange lots of event,Like HackerRank contest,ReactJS Live session and lots of other stuff.",
              ]}
            />
            <Resumecontent
              title="Microsoft Learn Student Ambassador"
              date="Sep 2019 - March 2021"
              content={[
                "Under the Microsoft Learn Student Ambassadors programme, I started my cloud journey and learn basics of azure and i hosted several events Like hosting github session, Benifits of open source programme and and its community and much more.",
              ]}
            /> */}
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelor in Computer Engineering"
              date="2018 - 2023"
              content={[
                `Institute Of Engineering(IOE), TU`,
                " I completed my Bachelor’s degree from Purwanchal Campus, Dharan, with major electives in Data Mining and Big Data Technology. ",
              ]}
            />

            <h3 className="resume-title">Engineering License</h3>
            <Resumecontent
              title=""
              content={[
                `Sucessfully registered as Professional Engineer from Nepal Engineering Council`
                
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
