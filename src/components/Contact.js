import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Auto-reply to visitor
    emailjs
      .sendForm(
        "service_wfimbt5", // service ID
        "template_0m1cyxn", // auto-reply template ID
        form.current,
        "NbxfKmkBsc36s9LAQ" // public key
      )
      .then((result) => {
        console.log("Auto-reply sent ✅", result.text);

        // 2. Forward message to your email
        return emailjs.sendForm(
          "service_wfimbt5", // same service ID
          "template_tkwtuie", // new template ID
          form.current,
          "NbxfKmkBsc36s9LAQ"
        );
      })
      .then(
        (result) => {
          alert("Message sent successfully! ✅");
          console.log("Forwarded to you ✅", result.text);
          form.current.reset();
        },
        (error) => {
          alert("Oops! Something went wrong ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <Container
      fluid
      className="contact-section"
      id="contact"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Contact Me</strong>
        </h1>
        <Row style={{ justifyContent: "center" }}>
          <Col xs={12} md={8} lg={6}>
            {" "}
            {/* Responsive column */}
            <Form ref={form} onSubmit={sendEmail} className="contact-form">
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  required
                  className="form-input"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary mt-3"
              >
                Send Message
              </Button>
            </Form>
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

export default Contact;
