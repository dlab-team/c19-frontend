import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CommentCard } from "./CommentCard";

export const Comments = () => {
  return (
    <Container fluid className="mt-5 p-0">
      <Row className="justify-content-start">
        <Col>
          <CommentCard />
        </Col>
        <Col>
          <CommentCard />
        </Col>
        <Col>
          <CommentCard />
        </Col>
      </Row>
    </Container>
  );
};
