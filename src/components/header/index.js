import React from "react";
import Media from 'react-media';
import { Container } from "./styles";
import Particles from "../../assets/Particles.mp4";
import Glitchlogo from "../../assets/glitchlogo.mp4";
import "../../animate.css";
import Typical from "react-typical";

export default function Header() {
  return (
    <Container>
      <video src={Particles} autoPlay loop muted />

      <video
        src={Glitchlogo}
        autoPlay
        loop
        muted
        className="glitchLogo animated fadeIn delay-1s"
      />
      {/* <img src={Logo} className="animated fadeIn delay-1s" alt="" /> */}
      <Typical
        steps={["BEYOND", 1000, " WAY BEYOND YOUR MIND...", 5000]}
        loop={Infinity}
        wrapper="h1"
        className="Teste"
      />
      <h3>
        Design, SEO, SPA's e sistemas web de alta performance, agora com a Lambda!
      </h3>

      <button>?</button>
    </Container>
  );
}
