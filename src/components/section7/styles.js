import styled from 'styled-components';
import Font from "../../assets/avnir_sv/AvenirLTStd-Book.otf";

export const Container = styled.div `
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @font-face {
    font-family: Font;
    src: url(${Font});
  }
  @media screen and(max-width: 1024px) {
    display: none;
    background-color:transparent;
  }

  JBloco3itemsComIMG {
    @media screen and(max-width: 1024px) {
      display: none;
      visibility: hidden;
    }
  }

  .container_cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 5%;

    @media screen and(max-width: 1024px) {
      display: none;
      visibility: hidden;
    }

  }`;
