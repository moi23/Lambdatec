import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border: 0;
  }

  .taligadopae {
    height: 6%;
    width: 100%;
    background: #ffffff;
    z-index: 999;
    position: absolute;
    bottom: 1px;
    right: 1px;
    border: solid 5px #ffffff;
  }
`;
