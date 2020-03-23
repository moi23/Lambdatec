import styled from "styled-components";
import Font from "../../../assets/avnir_sv/AvenirLTStd-Book.otf";

export const Container = styled.div`
  /* background-color: white; */
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
    background: white;
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

  .text {
    font-size: 180px;
    line-height: 138px;
    font-weight: 700;
    color: black;
    margin-right: 20px;
  }

  .title {
    text-align: justify;
    font-weight: bold;
    font-family: Font;
    font-size: 19px;
    line-height: 38px;
  }
  p {
    text-align: justify;
    font-weight: bold;
    font-family: Font;
  }
`;
