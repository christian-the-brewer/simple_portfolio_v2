import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { projectList } from "../../projectList";
import "../../styles/IndexProjects.css";
import { AiFillGithub } from "react-icons/ai";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const IndexProjects = () => {
  const projectCards = projectList.map((project, index) => (
    <Col>
    <a href={project.url} style={{ textDecoration: "none", color: "white" }}>
      <Card style={{ width: "300px", margin: 20 }} key={index} bg="black">
        <Card.Img variant="top" src={project.image} />
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
        </Card.Body>
        <Card.Footer >
            <a className="footer_link" href={project.githubUrl} ><AiFillGithub  /></a>
        </Card.Footer>
      </Card>
    </a>
    </Col>
  ));

  return <Container className="projects">
    <Row>
    {projectCards}
    </Row>
    </Container>;
};

export default IndexProjects;
