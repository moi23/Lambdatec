import React from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

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
          <Link to="/contact">CONTRATE NOSSOS SERVIÇOS</Link>
        </div>
      </div>
    </Container>
  );
}
