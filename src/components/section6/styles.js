import styled from "styled-components";
import Font from "../../assets/avnir_sv/AvenirLTStd-Book.otf";

export const Container = styled.div `
 background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @font-face {
    font-family: Font;
    src: url(${Font});
  }

  h2 {
    font-size: 64px;
    font-family: Font;
    letter-spacing: 20px;
  }

  p {
    font-family: Font;
    font-weight: bold;
    padding-bottom: 5% ;
  }

  .container_cards{
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   padding-bottom: 5%;
  }

  .linha1_cards,
  .linha2_cards,
  .linha3_cards{
    width:80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;
  }

  .titulo_card{
    font-size: 25px;
    letter-spacing: 25px;
   width: 50%;
   text-align: right;
  }

  .paragrafo_card{
    display: flex;
    justify-content: center;
    align-items: center;
     font-family: Font;
     font-weight: bold;
     width: 50%;
     text-align: justify;
  }

`;
