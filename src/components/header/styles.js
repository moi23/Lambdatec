import styled from "styled-components";
//import Logo from '../../assets/Particles.mp4';
import Video from "../../assets/Particles.mp4";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  height: 90vh;
  width: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
    position: relative;
    background-attachment: fixed;
  }

  img {
    position: absolute;
    height: 50%;
    top: 10%;
  }

  button {
    background: transparent;
    color: white;
    border: 2px solid white;
    position: absolute;
    bottom: -40px;
    font-size: 1em;
    height: 60px;
    width: 180px;
    opacity: 40%;
    transition: 0.5s;
    cursor: pointer;
    transform: scale(1);
    font-weight: bold;
  }

  button:hover {
    background: white;
    color: black;
    border: 2px solid white;
    position: absolute;
    bottom: -40px;
    font-size: 1em;
    cursor: pointer;
    z-index: 999;
    transform: scale(1) 0.2;
  }
  .Teste {
    position: absolute;
    color: white;
    bottom: 1px;
    font-size: 3rem;
    letter-spacing: 10px;
  }

  h2 {
    position: absolute;
    color: white;
    bottom: 1px;
    font-size: 3rem;
    letter-spacing: 10px;
  }
  h3 {
    position: absolute;
    bottom: 100px;
    color: white;
  }
`;
