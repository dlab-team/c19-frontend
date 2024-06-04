import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="row bg-black">
      <div className="container col-lg">
        <div className="h-50 py-2 d-flex align-items-center">
        <Link href="https://desafiolatam.com/">
        <Image 
            src={"/logo-academia-ne.png"}
            alt={"logo academia"}
            width={140}
            height={52}
            className="">
        </Image>
        </Link>
        </div>
        <div className="h-50 py-2 d-flex flex-row align-items-end ">
          <Link className="fa fa-facebook-square fs-5 px-2 text-secondary text-decoration-none" href="https://www.facebook.com/DesafioLatam/"></Link>
          <Link className="fa fa-linkedin-square fs-5 px-2 text-secondary text-decoration-none" href="https://www.linkedin.com/school/desafiolatam/"></Link>
          <Link className="fa fa-youtube-play fs-5 px-2 text-secondary text-decoration-none" href="https://www.youtube.com/channel/UCz0ekVt3TQ65voddo9xVOQw"></Link>
          <Link className="fa fa-instagram fs-5 px-2 text-secondary text-decoration-none" href="https://www.instagram.com/desafiolatam/"></Link>
        </div>
      </div>
      <div className="container col-lg row">
        <div className="col-md-4 py-2 d-flex flex-column">
          <p className="text-dark m-0 py-2">Topic</p>
          <Link className="text-secondary text-decoration-none py-2"href="">Page</Link>
          <Link className="text-secondary text-decoration-none py-2"href="">Page</Link>
          <Link className="text-secondary text-decoration-none py-2"href="">Page</Link>
        </div>
        <div className="col-md-4 py-2 d-flex flex-column">
          <p className="text-dark m-0 py-2">Topic</p>
          <Link className="text-secondary text-decoration-none py-2"href="">Page</Link>
          <Link className="text-secondary text-decoration-none py-2"href="">Page</Link>
          <Link className="text-secondary text-decoration-none py-2"href="">Page</Link>
        </div>
        <div className="col-md-4 py-2 d-flex flex-column">
          <p className="text-dark m-0 py-2">Topic</p>
          <Link className="text-secondary text-decoration-none py-2"href="">Page</Link>
          <Link className="text-secondary text-decoration-none py-2"href="">Page</Link>
          <Link className="text-secondary text-decoration-none py-2"href="">Page</Link>
        </div>
      </div>
    </footer>
  )
}

