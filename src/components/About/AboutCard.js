import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Dinesh Marasini </span>
            from <span className="purple"> Kathmandu, Nepal</span>
            <br />I am a Professional Computer Engineer and Passionate IT
            Enthusiast.
            <br />
            <br />
            Apart from IT things, I enjoy engaging in activities that enrich
            both my professional and personal life:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Leadership
            </li>
            <li className="about-activity">
              <ImPointRight /> Public Speaking
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Growth comes from progress made, not effort shown."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
