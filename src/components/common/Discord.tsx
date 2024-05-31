import React from 'react'
import { Container } from 'react-bootstrap'

export const Discord = () => {
  return (
    <Container className="mt-5">
      <div className="bg-light rounded border border-success d-flex justify-content-center align-items-center ">
        <h6 className="p-3 m-0">
          ¿Problemas con el ejercicio? Resuelve tus dudas junto a otros en la
          comunidad de <a href="https://discord.gg/Zmmch5KgWr" target='_blank'>Discord</a>
        </h6>
      </div>
    </Container>
  );
}
