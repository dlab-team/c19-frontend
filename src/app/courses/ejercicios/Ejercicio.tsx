import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Ejercicio(props:any) {
  return (
    <div className="col py-3">
    <Link href={props.url}>
      <Image             
        src={props.src}
        alt={props.alt}
        width={500}
        height={300}
        className={props.style}>
      </Image>
    </Link>
    <h5 className="">{props.title}</h5>
    <h6 className="text-secondary">{props.desc}</h6>
    </div>
  );
};
