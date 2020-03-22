import React from "react";
import {Container} from "./styles";

function Bloco3(props) {
  return (
    <Container>
      <div className="box">
        <img src={props.icon} alt="" className="icone" /> 
        <div className="sub_box">
          <div className="sub_sub_Box">
            <p className="title">{props.title}</p>
          </div>
          <p>{props.paragraph}</p> 
        </div> 
      </div>
    </Container>
  );
}

export default Bloco3;