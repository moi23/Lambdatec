import React from "react";

import { Paragraph } from "./styles";

const MBlocoParagraph = props => (
  <Paragraph width={props.width}>{props.text}</Paragraph>
);

export default MBlocoParagraph;
