import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <Link href="https://desafiolatam.com/">
            <Image
              src={"/logo-adl-blanco-verde.png"}
              alt={"Desafio Latam"}
              width={200}
              height={107}
              className=""
            >         
            </Image>
          </Link>
        </div>
        <Container>
          <div className="row">
            <div className="col-12 col-md-4 col-xl-4">
              <div className="footer-partners">
                <h3>Contacto General</h3>
                <h5><i className="fa fa-whatsapp" aria-hidden="true"></i>+56 9 5117 7975</h5>
                <h5><i className="fa fa-whatsapp" aria-hidden="true"></i>+52 1 55 4047 7251</h5>
                <h4>Horario de Atencion WhatsApp:</h4>
                <span>Lunes a Viernes de 10:00 a 18:00</span>
                <h4 className="mt-2">Contacto Admisión:</h4>
                <Link className="mailto" href="mailto:inscripciones@desafiolatam.com">inscripciones@desafiolatam.com</Link>
                <h4 className="mt-2">Contacto Estudiantes:</h4>
                <Link className="mailto" href="mailto:ayuda@desafiolatam.com">ayuda@desafiolatam.com</Link>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xl-4">
              <div className="footer-partners">
                <h3>Carreras</h3>
                <ul>
                  <li><Link href="https://desafiolatam.com/full-stack-javascript-b/">Desarrollo Full Stack JavaScript</Link></li>
                  <li><Link href="https://desafiolatam.com/diseño-ux-ui/">Diseño UX/UI</Link></li>
                  <li><Link href="https://desafiolatam.com/data-science/">Data Science</Link></li>
                  <li><Link href="https://desafiolatam.com/front-end-react/">Front End</Link></li>
                  <li><Link href="https://desafiolatam.com/data-analytics/">Data Analytics</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 col-xl-4">
              <div className="footer-partners">
                <h3>Nuestra comunidad</h3>
                <ul>
                <li><Link href="https://desafiolatam.com/estudiantes/">Estudiantes</Link></li>
                <li><Link href="https://desafiolatam.com/comunidad/">Comunidad</Link></li>
                <div className="dropdown-divider"></div>
                <li><Link href="https://blog.desafiolatam.com/">Blog</Link></li>
                <li><Link href="https://desafiolatam.com/becas/">Becas</Link></li>
                <li><Link href="https://desafiolatam.com/trabaja-con-nosotros/">Trabaja con Nosotros</Link></li>
                <li><Link href="https://desafiolatam.com/equipo-docente/">Postula para ser docente</Link></li>
                <li><Link href="https://desafiolatam.com/politica-de-calidad/">Políticas de Calidad</Link></li>
                <li><Link href="https://desafiolatam.com/poltica-privacidad-de-datos/">Políticas de Privacidad y Protección de Datos</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

