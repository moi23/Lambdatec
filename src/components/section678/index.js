import React from "react";
import {Container} from "./styles";
import JBloco3itemsComIMG from "../Util/JBloco3itemsComIMG/index.js";

export default function Section678() {
  const items = [{
      number: "1",
      title: "LEVANTAMENTO DE REQUISITOS",
      paragraph: "Nossa equipe de especialistas analisa seu projeto e encontra pontos de melhoria para aumento de performance e redução de custos"
    },
    {
      number: "2",
      title: "PLATAFORMAS E TECNOLOGIAS",
      paragraph: "As plataformas e as Tecnologias serão escolhidas para atender exatamente suas demandas."
    },
    {
      number: "3",
      title: "IDENTIDADE VISUAL",
      paragraph: "Nossos profissionais irão analisar sua marca para que tenha um engajamento maior no mercado digital."
    },

    {
      number: "4",
      title: "VERSÃO DE TESTES",
      paragraph: "Nossa equipe irá realizar todos os tipos de testes necessários para que haja nenhuma chance de erro na implantação do seu projeto."
    }
  ];

  return ( <Container>
    <div className ="T"> {
      items.map(({
        number,
        title,
        paragraph
      }) => ( <Mbloco3items
        key={number}
        number={number}
        title={title}
        paragraph={paragraph}
        />
      ))
    } 
    </div> 
    </Container>
  );
}