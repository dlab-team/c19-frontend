import React from "react";
interface EnunciadoProps{text: string}

const Enunciado: React.FC<EnunciadoProps> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    )
};

export default Enunciado;