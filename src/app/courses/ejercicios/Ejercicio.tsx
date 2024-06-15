import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  url: string;
  src: string;
  alt: string;
  style?: string;
  title: string;
  desc: string;
}

export default function Ejercicio({
  url,
  src,
  alt,
  title,
  style,
  desc,
}: Props) {
  return (
    <div className="col py-3">
      <Link href={url}>
        <Image src={src} alt={alt} width={500} height={300} className={style} />
      </Link>
      <h5 className="">{title}</h5>
      <h6 className="text-secondary">{desc}</h6>
    </div>
  );
}
