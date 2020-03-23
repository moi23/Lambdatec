import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  height: 100vh;
  width: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
    position: relative;
    background-attachment: fixed;
    pointer-events: none;
  }

  img {
    position: absolute;
    height: 50%;
    top: 5%;
  }

  button {
    background: transparent;
    color: white;
    border: 2px solid white;
    position: absolute;
    bottom: 10%; 
    font-size: 2em;
    height: 10%;
    width: 20%;
    opacity: 50%;
    transition: 0.5s;
    cursor: help;
    transform: scale(1);
    font-weight: bold;
    z-index: 999;
  }

  button:hover {
    background: white;
    color: black;
    border: 2px solid white;
    position: absolute;
    transform: scale(1.1);
  }
  
  .Teste {
    position: absolute;
    color: white;
    bottom: 25%;
    font-size: 3rem;
    letter-spacing: 10px;
  }

  h2 {
    position: absolute;
    color: white;
    top: -20%;
    font-size: 3rem;
    letter-spacing: 10px;
  }
  h3 {
    position: absolute;
    bottom: 35%;
    color: white;
  }

  
`;
