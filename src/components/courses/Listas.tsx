import React from "react";
import datos from "@/problems/problems.json"

interface ListasProps {
    descripcion?: string;
    children?: React.ReactNode;
}


export const Listas: React.FC<ListasProps> = ({
    descripcion,

}) => {
    return (
    <div className="listas-container">
            <div className="d-flex gap-5 ">
                <div className="lista-ordenada ">
                    <ul>
                            <li >
                                {descripcion}
                            </li>
                    </ul>
                </div>
                <div className="lista-desordenada">
                    <ol>
                            <li >
                                {descripcion}
                            </li>
                    </ol>
                </div>  
            </div> 
    </div>
);
};
