import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
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
              imgPath={chatify}
              isBlog={false}
              title="AGE CALCULATOR"
              description="An Age Calculator built using Flutter and Dart in Android Studio. It categorizes users into senior, child, and others based on their age."
              ghLink="https://github.com/kowsika-arumugamm/FLUTTER_AGE_CALCULATOR"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ONLINE CRIME COMPLAINT MANAGEMENT SYSTEM"
              description="Crime Complaint Management System built to manage complaints between users and admins.platform for users to submit complaints and for admins to review and manage them efficiently."
              ghLink="https://github.com/kowsika-arumugamm/ONLINECRIME"
              
            />
          </Col>

         

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
