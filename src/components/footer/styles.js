import styled from 'styled-components';

export const Container = styled.div `
  height: 30vh;
  background-color: black;
  bottom: 0;
  left: 0;
 
  .Footer{
     display: flex;
     justify-content: center;
     align-items: center;
  }

  .LogoLambdaFooter{
    position: relative;
    margin-top: 5vh;
    margin-left: 45%;
    width: 42px;
    height: 37px;
  }

  .LogoLambdaFooter img {
    width: 100%;
    height: 100%;
  }

  .RedesSociais{
    display: flex;
    justify-content: center;
    align-items: center;    
    margin-top: 10vh;
    height: 30px;
  }

  .RedesSociais a img{
    margin-left: 4vh;
    width: 30px;
    height: 30px;
    transition: .3s;
    transform: scale(1);
    filter: invert(1);
    opacity: 30%;
  }

  .RedesSociais a img:hover {
    opacity: 100%;
    transform: scale(1.2);
  }

`;
