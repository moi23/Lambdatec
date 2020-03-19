import React from 'react';
import { Container } from './styles';
import LogoFooter from "../../assets/lambda2.png"
import LogoFace from "../../assets/facebook-square.svg"
import LogoLink from "../../assets/linkedin.svg"
import LogoGit from "../../assets/github-square.svg"
import Logo99freelas from "../../assets/Logo99freelas.svg"

export default function Footer() {
  return (
    < Container> 
    
    <div className="Footer">
     <div> 
      <a href="#">
      <div className="LogoLambdaFooter">
        <img src={LogoFooter} alt="Logo Lambda" title="Way beyond the mind"/>
      </div>
      </a>

      <div className="RedesSociais">
       

        < a href = "https://www.facebook.com/" target = "_blank" >
          < img src = {
            LogoFace
          }
          alt = "Facebook"
          title = "Visite nossa página oficial no Facebook" / >
        </a>
       
        < a href = "https://www.facebook.com/" target = "_blank" >
          < img src = {
            LogoLink
          }
          alt = "Linkedin"
          title = "Nosso perfil no Linkedin" / >
        </a>
       
        < a href = "https://www.facebook.com/" target = "_blank" >
          < img src = {
            LogoGit
          }
          alt = "GitHub"
          title = "Perfil de repositórios no GitHub" / >
        </a>
       
        < a href = "https://www.facebook.com/" target = "_blank" >
          < img src = {
            Logo99freelas
          }
          alt = "99Freelas"
          title = "Também estamos no 99freelas!" / >
        </a>
    
      </div>
      </div>
  </div>
    
    </Container>
  );
}
