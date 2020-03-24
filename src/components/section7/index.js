import React from "react";
import {Container} from "./styles";
import JBloco3itemsComIMG from "../Util/JBloco3itemsComIMG/index.js";
import EscalaLogo from "../../assets/database.svg";
import BackupsLogo from "../../assets/backup.svg";
import HomologLogo from "../../assets/contract.svg";
import DeployLogo from "../../assets/rocket.svg";

export default function Section7() {
  const items = [{
      number: "1",
      icon: EscalaLogo,
      title: "ESCALA",
      paragraph: "Sua infra-estrutura escala de acordo com as necessidades do seu projeto, com custo fixo sem varição por uso de recursos ou flutuação do dólar."
    },
    {
      number: "2",
      icon: BackupsLogo,
      title: "BACKUPS",
      paragraph: "Todos os seus arquivos e dados são armazenados com redudância intercontinental e passam por uma rotina de backups em horas, dias, semanas e meses."
    },
    {
      number: "3",
      icon: HomologLogo,
      title: "HOMOLOG",
      paragraph: "Todo projeto na LambdaTec recebe um ambiente de homologação sem custo adicional, e toda alteração é aplicada e aprovada em um ambiente privado."
    },

    {
      number: "4",
      icon: DeployLogo,
      title: "DEPLOY",
      paragraph: "O processo de upload e arquivos pode ser configurado para que ocorra de maneira otimizada a partir do seu repositório de código, com total agilidade e segurança."
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