import React from "react";
import { Container } from "./styles";
import Mbloco3items from "../Util/MBloco3items/index.js";
import MBlocoParagraph from "../Util/MBlocoParagraph/index.js";

export default function Section3() {
  return (
    <Container>
      <div className="T">
        <Mbloco3items
          number="1"
          title="LEVANTAMENTO DE REQUISITOS"
          paragraph="Nossa equipe de especialistas analisa seu projeto e encontra pontos de melhoria para aumento de performance e redução de custos"
        />
        <Mbloco3items
          number="2"
          title="PLATAFORMAS E TECNOLOGIAS"
          paragraph="As plataformas e as Tecnologias serão escolhidas para atender exatamente suas demandas."
        />
        <Mbloco3items
          number="3"
          title="IDENTIDADE VISUAL"
          paragraph="Nossos profissionais irão analisar sua marca para que tenha um engajamento maior no mercado digital."
        />
        <Mbloco3items
          number="4"
          title="VERSÃO DE TESTES"
          paragraph="Nossa equipe irá realizar todos os tipos de testes necessários para que haja nenhuma chance de erro na implantação do seu projeto."
        />
      </div>
    </Container>
  );
}
