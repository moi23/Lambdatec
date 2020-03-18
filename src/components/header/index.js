import React from "react";

import { Container } from "./styles";
import Particles from "../../assets/Particles.mp4";
import Logo from "../../assets/lambda2.png";
import "../../animate.css";
import Typical from "react-typical";

export default function Header() {
  return (
    <Container>
      <video src={Particles} autoplay="autoplay" loop="loop" />
      <img src={Logo} className="animated fadeIn delay-1s" alt="" />
      <Typical
        steps={["BEYOND", 1000, " WAY BEYOND THE MIND", 5000]}
        loop={Infinity}
        wrapper="h1"
        className="Teste "
      />
      <h3>
        Segurança, Estabilidade e alta performance em suas aplicações agora com
        a consultoria da λ
      </h3>
      <button>?</button>
    </Container>
  );
}
