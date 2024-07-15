import type { Response } from "@/actions/problems-client-actions";
import Image from "next/image";
import React from "react";

interface Props {
  response: Response;
}

const IAMessage = ({ response }: Props) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-start ">
        {response.response ? (
          <div className="iabubble">
            <h4>
              {response.success ? "Resultado Correcto" : "Resultado Incorrecto"}
            </h4>
            <h6 className="iabubble-message">{response.response}</h6>
          </div>
        ) : (
          <div style={{ width: "707px", height: "142px" }}></div>
        )}

        <Image src={"/iaIcon.png"} alt={"iaIcon"} width={100} height={100} />
      </div>
    </>
  );
};

export default IAMessage;
