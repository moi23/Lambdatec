import React from "react";

import { Container } from "./styles";

export default function Section3() {
  return (
    <Container>
      <div className="box">
        <p class="text">1</p>
        <div className="sub_box">
          <div className="sub_sub_Box">
            <p className="title">LEVANTAMENTO DE REQUISITOS</p>
          </div>
          <p>
            Nossa equipe de especialistas analisa seu projeto e encontra pontos
            de melhoria para aumento de performance e redução de custos.
          </p>
        </div>
      </div>
      {/* REFATORAR */}
    </Container>
  );
}
