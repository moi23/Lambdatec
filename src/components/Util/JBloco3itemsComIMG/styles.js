import styled from "styled-components";
import Font from "../../../assets/avnir_sv/AvenirLTStd-Book.otf";

export const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;

  @font-face {
    font-family: Font;
    src: url(${Font});
  }

  .box {
    display: flex;
    align-items: center;
    height: 280px;
    width: 500px;
  }

  .box img {
    width: 93px;
    height: 93px;
  }

  .icone {
    width: 93px;
    height: 93px;
    top: 0;
    margin-right: 20px;
    margin-bottom: 75px;
  }

  .sub_box {
    background: white;
    height: 200px;
    width: 400px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .sub_sub_Box {
    display: flex;
  }

  .title {
    text-align: justify;
    font-family: Font;
    font-size: 25px;
    letter-spacing: 40px;
    line-height: 38px;
  }

  p {
    text-align: justify;
    font-weight: bold;
    font-family: Font;
    margin-right: 20px;
  }
`;