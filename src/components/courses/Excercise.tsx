"use client";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

interface Props {
  title: string;
  description: string;
  id: number;
  type: string;
}

const Excercise = ({ title, description, id, type }: Props) => {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <h4 className="fw-bold">{title}</h4>
        <p className="excercise-description">{description}</p>
        <div className="d-flex text-center">
          <Link href={`/courses/${type}/${id}`} className="excercise-button">
            Ver
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Excercise;
