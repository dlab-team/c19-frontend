'use client'

import Image from 'next/image';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";


export const CommentCard = () => {
  return (
    <Card
      style={{ width: "25rem" }}
      className="shadow p-3 mb-5 bg-body rounded"
    >
      <Card.Body>
        <Card.Title className="m-2">"Lorem Ipsum"</Card.Title>
        <Container>
          <Row>
            <Col xs={4}>
              <Image src="/man.png" width={60} height={60} alt="avatar" />
            </Col>
            <Col xs={8}>
              <Card.Text>Name</Card.Text>
              <Card.Text>Description</Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

