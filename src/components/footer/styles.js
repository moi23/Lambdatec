import styled from "styled-components";
import Font from "../../assets/avnir_sv/AvenirLTStd-Book.otf";
import Particles from "../../assets/Particles.mp4";

export const Container = styled.div`

  height: 30vh;
  bottom: 0;
  left: 0;
 

   @font-face {
     font-family: Font;
     src: url(${Font});
   }
    .videoFooter {

      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      width: auto;
      height: auto;
      z-index: -1000;
      background-size: cover;
    
   }
  
.ImgAstronauta{
  position:absolute;
  height: 200%;
  width: auto;
  right: 0;
  bottom: -10%;
}

.ContainerLogosContato{
  bottom: 0;
}


  .Footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  
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
    margin-left: 4%;
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

  .Contato{
    width:100%;
    left: 0;
    text-align: center;
    color: white;
    z-index: 999;
    opacity: 20%;
    transition: .5s;
    transform: scale(0.8);
  
  }

  .Contato:hover {
    opacity: 100%;
    transition: .5s;
    transform: scale(1);
  
  }

  a {
    text-decoration: none;
    color: #fff;
   
  }

`;
