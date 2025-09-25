import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// import eCom from "../../Assets/Projects/E-com.png";
// import jsomBlog from "../../Assets/Projects/jsomBlog.png";
// import taskify from "../../Assets/Projects/Taskify.png";
// import aF from "../../Assets/Projects/artisteeF.png";
// import aA from "../../Assets/Projects/artisteeA.png";
// import easyCode from "../../Assets/Projects/easy-code.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
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
              // imgPath={taskify}
              isBlog={false}
              title="Population Census analytics"
              description={
                <p style={{ textAlign: "left", margin: 0 }}>
                  This is a University Minor Project based on a Computer-Based
                  Population Census System, developed using PHP, HTML/CSS,
                  JavaScript, and MySQL for the database. SVG (Scalable Vector
                  Graphics) was implemented to provide real-time population
                  analytics and information visualization. The primary objective
                  of this project is to replace the traditional paper-based
                  census collection system with a digital solution, enabling
                  real-time geographical analysis of population data.
                </p>
              }
              link="https://github.com/Dineshmarasini/Computer-Base-population-Census-system.git"
              // liveLink="https://trallo-clone-mocha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={easyCode}
              isBlog={false}
              title="Tours and Travel"
              description={
                <p style={{ textAlign: "left", margin: 0 }}>
                  Tours and Travels is a website for a travel company, designed
                  to showcase diverse destinations and attract tourists through
                  digital branding. It features a user-friendly interface,
                  engaging visuals, and interactive elements like image
                  galleries and destination highlights. Built with React and
                  HTML/CSS, the site offers a responsive and visually appealing
                  experience, effectively promoting the company’s travel
                  offerings online."
                </p>
              }
              link="https://github.com/Dineshmarasini/Tours-and-Travel-webApp"
              // liveLink="https://blog.mohitsojitra.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={eCom}
              isBlog={false}
              title="CURSOR CONTROL WITH FACIAL GESTURES"
              description={
                <p style={{ textAlign: "left", margin: 0 }}>
                  This project presents a novel approach to cursor control
                  utilizing facial gestures through a Convolutional Neural
                  Network (CNN). The goal is to provide an intuitive, hands-free
                  interaction method for computer interfaces. The system
                  leverages the power of CNNs to accurately recognize and
                  interpret facial gestures in real time. The project begins
                  with the collection and annotation of a comprehensive dataset
                  consisting of various facial gestures, encompassing movements
                  of eyebrows, eyes, mouth, and other facial landmarks.
                </p>
              }
              link=""
              liveLink="https://drive.google.com/file/d/1qSbTADpyZEzP4rsvqzzH_gInI3pyay2S/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={jsomBlog}
              isBlog={false}
              title="Cricket Data static analysis"
              description={
                <p style={{ textAlign: "left", margin: 0 }}>
                  This project focuses on analyzing current cricket player data
                  to create the best possible IPL teams. The dataset contains
                  nearly 1,000 players along with their detailed performance
                  statistics. The goal is to identify and select the optimal
                  playing 11 by performing data analysis using Jupyter Notebook,
                  leveraging Pandas for data manipulation, and Matplotlib and
                  Seaborn for insightful visualizations. The project provides a
                  comprehensive approach to evaluating player performance,
                  comparing statistics, and making data-driven decisions for
                  team selection.
                </p>
              }
              link=" https://github.com/Dineshmarasini/Data-analysis-and-visualization-for-best-11-of-IPL-2022"
              // liveLink="https://react-blog-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={aF}
              isBlog={false}
              title="Authentication and Authorization with JWT Token and Hashing Key"
              description={
                <p style={{ textAlign: "left", margin: 0 }}>
                  Authentication and Authorization with JWT and Hashing is a
                  backend project that implements secure user authentication and
                  authorization. It uses JWT for token-based authentication and
                  bcrypt for password hashing, built with Node.js and Express.
                  The project demonstrates secure management of user sessions,
                  roles, and access control for RESTful APIs.
                </p>
              }
              link="https://github.com/Dineshmarasini/Authentication-and-Authorization-with-JWT-Token-and-Hashing-key."
              // liveLink="https://artistee-fronend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={aA}
              isBlog={false}
              title="Book Management Full Stack"
               description={
                <p style={{ textAlign: "left", margin: 0 }}>
                  Java Spring Boot Book Management Web App is a full-stack application for
                   managing book records, built with Spring Boot, Thymeleaf, and JPA. 
                   It provides a user-friendly interface for CRUD operations on books, 
                   offering features like search, pagination, and data validation. 
                   The project demonstrates efficient backend development and seamless 
                   integration with a responsive frontend, suitable for library or 
                   inventory management systems.
                </p>
              }
              link="https://github.com/Dineshmarasini/Java-SpringBoot-Thymeleaf-jpa-BookManagement-web"
              // liveLink="https://artistee-admin.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
