import React from "react";
import { Container } from "./styles";
import LogoFooter from "../../assets/lambda2.png";
import LogoFace from "../../assets/facebook-square.svg";
import LogoLink from "../../assets/linkedin.svg";
import LogoGit from "../../assets/github-square.svg";
import Logo99freelas from "../../assets/Logo99freelas.svg";
import Particles from "../../assets/Particles.mp4";

function Footer() {
  return (
    <Container>
      <div className="Footer">
        <video src={Particles} autoPlay loop muted className="videoFooter" />

        <div>
          <a href="#">
            <div className="LogoLambdaFooter">
              <img
                src={LogoFooter}
                alt="Logo Lambda"
                title="Way beyond the mind"
              />
            </div>
          </a>
          <div className="divisaoRedesSociais">
            <hr className="HRdivisaoRedesSociais" />
          </div>
          <div className="RedesSociais">
            <a href="https://www.facebook.com/LambdaTec1/" target="_blank">
              <img
                src={LogoFace}
                alt="Facebook"
                title="Visite nossa página oficial no Facebook"
              />
            </a>

            <a href="https://www.linkedin.com/" target="_blank">
              <img
                src={LogoLink}
                alt="Linkedin"
                title="Nosso perfil no Linkedin"
              />
            </a>

            <a href="https://github.com/moi23/Lambdatech" target="_blank">
              <img
                src={LogoGit}
                alt="GitHub"
                title="Perfil de repositórios no GitHub"
              />
            </a>

            <a
              href="https://www.99freelas.com.br/user/lambdatec"
              target="_blank"
            >
              <img
                src={Logo99freelas}
                alt="99Freelas"
                title="Também estamos no 99freelas!"
              />
            </a>
          </div>
          <br />
          <div className="Contatos">
            <a href="mailto:lambdatec.contato@gmail.com" target="_blank">
              <h3 className="Contato"> lambdatec.contato@gmail.com </h3>
            </a>
            <h3 className="Contato">
              <a
                href="https://api.whatsapp.com/send?phone=5515996390784"
                target="_blank"
              >
                +55 15 99639 - 0784
              </a>
              |
              <a
                href="https://api.whatsapp.com/send?phone=5515997471589"
                target="_blank"
              >
                +55 15 99747 - 1589
              </a>
            </h3>
            <br />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
