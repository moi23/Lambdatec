import React from "react";

import { Container } from "./styles";

export default function MBloco3items(props) {
  return (
    <Container>
      <div>
        <div className="box">
          <p class="text">{props.number}</p>
          <div className="sub_box">
            <div className="sub_sub_Box">
              <p className="title">{props.title}</p>
            </div>
            <p>{props.paragraph}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
