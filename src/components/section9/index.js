import React from "react";
<<<<<<< HEAD
import { Container } from "./styles";

export default function Section9() {
  return (
    <Container>
      <div className="ChamadaFooter">
        <h2 className="ChamadaContrate">
          RECEBA UM ORÇAMENTO E CONTRATE A LAMBDA
        </h2>
        <h2 className="subTituloChamada">
          Nossa equipe entrará em contato por email ou telefone para coletar
          mais informações.
        </h2>
      </div>
      <div className="containerBtnContrate">
        <div className="BtnContrate">
          <a href="#" target="_blank">
            CONTRATE NOSSOS SERVIÇOS
          </a>
        </div>
      </div>
    </Container>
=======
import { Container } from "./styles.js";

export default function Section9() {
  return ( 
  <Container>
    <div className="ChamadaFooter">
      <h2 className ="ChamadaContrate" > RECEBA UM ORÇAMENTO E CONTRATE A LAMBDA </h2>  
      <h2 className ="subTituloChamada" > Nossa equipe entrará em contato por email ou
      telefone para coletar mais informações. </h2>
    </div>
    <div className="containerBtnContrate">
      <div className="BtnContrate">
        {/* <a href="#" target="_blank">CONTRATE NOSSOS SERVIÇOS</a> */}
      </div>
    </div>
  </Container>

    
>>>>>>> edc0da8cd18e5db7ce6a9de7fd0d8ec3e38bfc17
  );
}
