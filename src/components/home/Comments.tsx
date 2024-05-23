import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { CommentCard } from './CommentCard';

export const Comments = () => {
  return (
    <Container className='mt-5'>
      <Row>
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
}
