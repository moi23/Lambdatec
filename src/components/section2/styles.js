import styled from "styled-components";
import Font from "../../assets/avnir_sv/AvenirLTStd-Book.otf";

export const Container = styled.div`
  height: 30vh;

  @font-face {
    font-family: Font;
    src: url(${Font});
  }

  h2 {
    margin-top: 138px;
    font-size: 64px;
    font-family: Font;
    letter-spacing: 20px;
  }

  p {
    font-family: Font;
    font-weight: bold;
  }

  .subContain {
    display: flex;
  }
`;
