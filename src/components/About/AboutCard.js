import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Binay Kumar Gupta </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently working as a <span className="purple">Senior Software Engineer</span> at{" "}
            <span className="purple">Simplotel Technologies, Bengaluru.</span>
            <br />
            I have completed my Master of Technology in{" "}
            <span className="purple">Cyber Laws and Information Security</span> from{" "}
            <span className="purple">IIIT Allahabad</span> (GPA: 8.67/10).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Binay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
