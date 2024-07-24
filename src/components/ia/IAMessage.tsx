"use client";

import { getPhrase } from "@/helpers/random-phrases";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  response: IAResponse;
  showDiv: boolean;
  setShowDiv: (arg: boolean) => void;
  handleRequestIA: () => void;
}

export interface IAResponse {
  response: string;
  success: boolean;
}

export const IAMessage = ({
  response,
  showDiv,
  setShowDiv,
  handleRequestIA,
}: Props) => {
  const [customText, setCustomText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isConditionallyRendered = response.response && showDiv;
  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, [response]);

  const handleClick = () => {
    setShowDiv(!showDiv);
    setCustomText(getPhrase());
  };
  const handleReqIA = () => {
    setIsLoading(true);
    handleRequestIA();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-start "
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <AnimatePresence>
        {isConditionallyRendered ? (
          <AnimatePresence>
            <motion.div
              className={`iabubble ${response.success ? "border-success" : "border-failure"}`}
              initial={{
                opacity: 0,
                scale: 0,
                transformOrigin: "bottom right",
              }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0, transformOrigin: "bottom right" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
                mass: 1.1,
                duration: 2,
              }}
            >
              <div className="d-flex justify-content-between">
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
                    {response.success
                      ? "Aqui tienes algunos tips:"
                      : "Resultado Incorrecto"}
                  </h4>
                </div>
                <div>
                  <IoIosCloseCircleOutline
                    size={35}
                    className="close-button"
                    onClick={() => setShowDiv(!showDiv)}
                  />
                </div>
              </div>
              {isLoading ? (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Spinner className="p-3" animation="grow" />
                  <h6 className="mt-3">
                    Verificando tu respuesta con IA... espera un momento
                  </h6>
                </div>
              ) : (
                <>
                  <h6 className="iabubble-message pt-2">{response.response}</h6>
                  {!response.success && (
                    <div className="d-flex gap-3">
                      <Button variant="primary" onClick={() => handleReqIA()}>
                        Si
                      </Button>
                      <Button
                        variant="secondary"
                        onClick={() => setShowDiv(false)}
                      >
                        No
                      </Button>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        ) : (
          <>
            <AnimatePresence>
              {!response.response && showDiv && (
                <motion.div
                  className={`iabubble ${response.success ? "border-success" : "border-failure"}`}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    transformOrigin: "bottom right",
                  }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    transformOrigin: "bottom right",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 20,
                    mass: 1.1,
                    duration: 2,
                  }}
                >
                  <div className="d-flex justify-content-between">
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
                    <div>
                      <IoIosCloseCircleOutline
                        size={35}
                        className="close-button"
                        onClick={() => setShowDiv(!showDiv)}
                      />
                    </div>
                  </div>
                  <h6 className="iabubble-message pt-2">{customText}</h6>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>

      <Image
        src={"/iaIcon.png"}
        alt={"iaIcon"}
        width={100}
        height={100}
        onClick={handleClick}
        style={{
          cursor: "pointer",
          position: "absolute",
          right: "20px",
          bottom: "20px",
        }}
      />
    </div>
  );
};
