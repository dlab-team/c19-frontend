"use client";
import type { Response } from "@/actions/problems-client-actions";
import { getPhrase } from "@/helpers/random-phrases";
import Image from "next/image";
import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { motion } from "react-magic-motion";

interface Props {
  response: Response;
  isLoading: boolean;
}

export const IAMessage = ({ response, isLoading }: Props) => {
  const [showDiv, setShowDiv] = useState(false);
  const [customText, setCustomText] = useState("");

  const handleClick = () => {
    setShowDiv(true);
    setCustomText(getPhrase());
  };

  return (
    <div className="d-flex justify-content-center align-items-start">
      {response.response && !isLoading ? (
        <motion.div
          className={`iabubble ${response.success ? "border-success" : "border-failure"}`}
          initial={{ opacity: 0, scale: 0, transformOrigin: "top right" }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
            mass: 1.1,
            duration: 2,
          }}
        >
          <div className="d-flex align-items-center gap-2">
            <Image
              src={`${!response.success ? "/mad_robot.png" : "/happy_robot.png"}`}
              alt={"iaIcon"}
              width={50}
              height={50}
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            />
            <h4>
              {response.success ? "Resultado Correcto" : "Resultado Incorrecto"}
            </h4>
          </div>

          <h6 className="iabubble-message pt-2">{response.response}</h6>
        </motion.div>
      ) : (
        <>
          <div className="spinner-container">
            {isLoading && (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Spinner className="p-4" animation="grow" />
                <h6 className="mt-3">
                  Verificando tu respuesta con Inteligencia Artificial
                </h6>
              </div>
            )}
            {!isLoading && !response.response && showDiv && (
              <motion.div
                className={`iabubble ${response.success ? "border-success" : "border-failure"}`}
                initial={{ opacity: 0, scale: 0, transformOrigin: "top right" }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 20,
                  mass: 1.1,
                  duration: 2,
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <Image
                    src={`${!response.success ? "/mad_robot.png" : "/happy_robot.png"}`}
                    alt={"iaIcon"}
                    width={50}
                    height={50}
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                  />
                  <h4>¡Hola!</h4>
                </div>
                <h6 className="iabubble-message pt-2">{customText}</h6>
              </motion.div>
            )}
          </div>
        </>
      )}

      <Image
        src={"/iaIcon.png"}
        alt={"iaIcon"}
        width={100}
        height={100}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
