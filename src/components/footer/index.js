import React from 'react';
import { Container } from './styles';
import LogoFooter from "../../assets/LogoLambdaFooter.png"


export default function Footer() {
  return (
    < Container> 
    
    <div className="Footer">
      <div className="LogoLambdaFooter">
        <img src={LogoFooter} alt="Logo Lambda" title="Way beyond the mind"/>
      </div>
      <div className="RedesSociais">
        
      </div>
    </div>
    
    </Container>
  );
}
