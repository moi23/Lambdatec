import React from "react";
import {Container} from "./styles";
import MBlocoTitle from "../Util/MBlocoTitle/index.js";

export default function Section6() {
  return (<Container>
    <MBlocoTitle text="THE HELP MIND" />
    <br /> <p> Suporte, monitoramento e consultoria LambdaTec 24/7 para você ir mais longe com performance e segurança. </p> 
    
    <div className="container_cards">
    
      <div className="linha1_cards">
        <h2 className="titulo_card">SUPORTE</h2>
        <p className="paragrafo_card">Conte com nossa equipe de especialistas sempre que precisar atráves de canais de atendimento
        rápidos e diretos como Telegram, Messenger ou WhatsApp. Você sempre terá contato com quem realmente
        entende do assunto, sem chatbots ou mensagens automáticas.</p>
      </div>
    
      <div className="linha2_cards">
        <h2 className = "titulo_card">MONITORAMENTO</h2>
        <p className = "paragrafo_card">Sua infra-estrutura é monitorada sem intervalos 24 horas por dia,
        7 dias por semana, por profissionais especializados e prontos para tomar ações necessárias em casos de
        pico de acessos, problemas de hardware ou software ou ataques. O monitoramento acontece de maneria pró-ativa,
        desse modo nossa equipe estará trabalhando na resolução de problemas mesmo antes do report.</p> 
      </div>
    
        <div className = "linha3_cards">
          <h2 className="titulo_card">CONSULTORIA</h2>
          < p className = "paragrafo_card">Nossa equipe trabalha sempre de maneira pró-ativa procurando e sugerindo
          novas soluções que otimizem os recursos e os resultados do seu projeto. Conte com a consultoria da LambdaTec
          para fortaceler o presente e discutir o futuro da sua solução.</p> 
        </div>
    
    </div>

    </Container>
  );
}