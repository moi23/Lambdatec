import React from "react";

import { Container } from "./styles";
import Particles from "../../assets/Particles.mp4";
import Logo from "../../assets/lambda2.png";
import "../../animate.css";
import Typical from "react-typical";
import "../../logic/autoPlay";

export default function Header() {
  return (
    <Container>
      <video src={Particles} className="teste" autoPlay loop muted />
      <img src={Logo} className="animated fadeIn delay-1s" alt="" />
      <Typical
        steps={["BEYOND", 1000, " WAY BEYOND YOUR MIND...", 5000]}
        loop={Infinity}
        wrapper="h1"
        className="Teste"
      />
      <h3>
        Segurança, design, SEO, desenvolvimentos em alta performance, agora com
        a consultoria da Lambda
      </h3>
      <button onclick="#sec1">?</button>
    </Container>
  );
}
