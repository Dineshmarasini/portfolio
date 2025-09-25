import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

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
              My journey in programming started with curiosity and has grown
              into a true passion for building and problem-solving....
              <br />
              <br />I enjoy thinking through
              <i>
                <b className="purple">
                  {" "}
                  problems, planning, analyzing, and designing{" "}
                </b>
                <p> effective solutions</p>
              </i>
              <br />I am passionate about exploring cutting-edge technologies
              that are shaping the future such as &nbsp;
              <i>
                <b className="purple">
                  AI systems, IoT, Computer Vision, and Big Data,{" "}
                </b>{" "}
                and also in areas related to <b className="purple">Clouds.</b>
              </i>
              <br />
              <br />I enjoy taking on roles where I can apply my expertise to
              solve critical problems while collaborating with a team and
              demonstrating leadership.
              <i></i>
              &nbsp;
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
            <p>Feel free to connect with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Dineshmarasini"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dns30/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://x.com/DNS_Marasini"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~0118e513130f5c9eb2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiUpwork />
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
