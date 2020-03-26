import React from "react";
import {Container} from "./styles";
import JBloco3itemsComIMG from "../Util/JBloco3itemsComIMG/index.js";
import ReactLogo from "../../assets/react.svg";
import IdentidadeVisualLogo from "../../assets/eye.svg";
import SEOLogo from "../../assets/google.svg";
import ResponsiveLogo from "../../assets/responsive.svg";

export default function Section7() {
  const items = [{
      number: "1",
      icon: ReactLogo,
      title: "REACT",
      paragraph: "Todos os nossos projetos são desenvolvidos ReactJS e/ou ReactNative, o que proporciona maior agilidade no processamento e aplicações bem organizadas e escaláveis, ou seja, de fácil manutenção, mesmo que cresça em complexidade e tamanho."
    },
    {
      number: "2",
      icon: IdentidadeVisualLogo,
      title: "ID VISUAL",
      paragraph: "A equipe de designers da LambdaTec irão analisar sua marca, seu nicho de mercado e a personalidade de seu público alvo, para que finalmente possam elaborar sua identidade visual, paleta de cores mais adequadas, etc..."
    },
    {
      number: "3",
      icon: SEOLogo,
      title: "SEO",
      paragraph: "SEO é a sigla para Search Engine Optimization, que significa otimização para mecanismos de busca, ou otimização de sites. Nós iremos usar os robôs de pesquisa do Google e outros motores de busca para te dar vantagem e sua empresa irá aparecer nas primeiras páginas das pesquisas."
    },

    {
      number: "4",
      icon: ResponsiveLogo,
      title: "RESPONSIVE",
      paragraph: "O processo de criação de sistemas é configurado para que sua exibição seja otimizada em qualquer tela, desde smartphones até grandes monitores."
    }
  ];

  return ( <Container>
    <div className ="container_cards"> {
      items.map(({
        number,
        icon,
        title,
        paragraph
      }) => ( <JBloco3itemsComIMG
        key={number}
        icon={icon}
        title={title}
        paragraph={paragraph}
        />
      ))
    } 
    </div> 
    </Container>
  );
}