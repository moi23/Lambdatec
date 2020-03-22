import styled from "styled-components";

export const Container = styled.div`

  height: 30vh;
  background-color: black;
  bottom: 0;
  left: 0;

  
  .Footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .LogoLambdaFooter {
    position: relative;
    margin-top: 5vh;
    margin-left: 46%;
    width: 37px;
    height: 32px;
  }

  .LogoLambdaFooter img {
    width: 100%;
    height: 100%;
  }

  .RedesSociais {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    height: 30px;
  }

  .divisaoRedesSociais {
    width: 100%;
  }

  .HRdivisaoRedesSociais {
    width: 100%;
    margin-left: 5%;
    margin-top: 8%;
    opacity: 20%;
  }

  .RedesSociais a img {
    margin-left: 4vh;
    width: 30px;
    height: 30px;
    transition: 0.4s;
    transform: scale(1);
    filter: invert(1);
    opacity: 20%;
  }

  .RedesSociais a img:hover {
    opacity: 100%;
    transform: scale(2);
  }
`;
