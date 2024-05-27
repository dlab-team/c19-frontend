import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="bg_desafio p-4">
      <Link href="https://desafiolatam.com/" className="px-5">
        <Image
          src={"/logo-academia-ne.png"}
          alt={"logo academia"}
          width={158}
          height={55}
          className=""
        ></Image>
      </Link>
    </div>
  );
};
