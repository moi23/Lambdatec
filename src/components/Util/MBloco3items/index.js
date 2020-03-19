import React from "react";
import { Container } from "./styles";

function Bloco3(props) {
  return (
    <Container>
      <div className="box">
        <p class="text">{props.number}</p>
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
