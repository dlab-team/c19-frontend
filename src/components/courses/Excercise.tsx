"use client";
import { ProblemSolved } from "@/interfaces/problems";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  id: number;
  type: string;
  cookieList: ProblemSolved;
}

const Excercise = ({ title, description, id, type, cookieList }: Props) => {
  let date: Date | null = null;
  let shortDate: string | null = null;
  if (cookieList && cookieList.solved && cookieList.solvedTimeStamp) {
    const timestamp = cookieList.solvedTimeStamp;
    if (typeof timestamp === "string" || typeof timestamp === "number") {
      date = new Date(timestamp);
      if (!isNaN(date.getTime())) {
        shortDate = date.toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
      }
    }
  }

  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body>
        <h4 className="fw-bold">{title}</h4>
        <p className="excercise-description">{description}</p>
        <div className="d-flex text-center flex-column gap-2">
          <Link href={`/courses/${type}/${id}`} className="excercise-button">
            Ver
          </Link>
          {cookieList && cookieList.solved && shortDate ? (
            <div>
              <FaCheckCircle /> Aprobado el {shortDate}
            </div>
          ) : (
            ""
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Excercise;
