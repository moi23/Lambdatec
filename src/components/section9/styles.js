import styled from 'styled-components';

<<<<<<< HEAD
export var Container = styled.div`
  background-color: white;

  .ChamadaFooter {
=======
const Container = styled.div`
 
background-color: white;

 .ChamadaFooter{
>>>>>>> edc0da8cd18e5db7ce6a9de7fd0d8ec3e38bfc17
    width: 100%;
    padding-top: 10%;
  }

  .ChamadaContrate {
    text-align: center;
    letter-spacing: 15px;
    color: red;
  }

<<<<<<< HEAD
  .subTituloChamada {
    text-align: center;
  }

  .containerBtnContrate {
=======
  .subTituloChamada{
    text-align: center; 
  }

  .containerBtnContrate{
>>>>>>> edc0da8cd18e5db7ce6a9de7fd0d8ec3e38bfc17
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 10%;
  }

  .BtnContrate a {
    display: inline-block;
    position: relative;
    font-size: 25px;
    color: black;
    line-height: 30px;
    letter-spacing: 8px;
    font-weight: 600;
<<<<<<< HEAD
    opacity: 0.9;
    text-decoration: none;
    transition: all 0.35s ease-in-out;
  }

  .BtnContrate a::before {
    width: 30px;
    border: 2px solid black;
    letter-spacing: -0.5px;
    position: absolute;
    left: -35px;
    top: 14px;
    transition: all 0.35s ease-in-out;
  }

  .BtnContrate a::after {
    width: 30px;
    border: 2px solid black;
    letter-spacing: -0.5px;
    position: absolute;
    right: -28px;
    top: 14px;
    transition: all 0.35s ease-in-out;
=======
    opacity: .9;
    text-decoration: none;
    transition: all .35s ease-in-out;
  }

  .BtnContrate a::before{
    content: "";
    width: 30px;
    border: 2px solid black;
    letter-spacing: -.5px;
    position: absolute;
    left: -35px;
    top: 14px;
    transition: all .35s ease-in-out;
  }

  .BtnContrate a::after {
    content: "";
    width: 30px;
    border: 2px solid black;
    letter-spacing: -.5px;
    position: absolute;
    right: -28px;
    top: 14px;
    transition: all .35s ease-in-out;
>>>>>>> edc0da8cd18e5db7ce6a9de7fd0d8ec3e38bfc17
  }

  .BtnContrate a:hover {
    padding-left: 25px;
    padding-right: 25px;
<<<<<<< HEAD
    transition: all 0.35s ease-in-out;
  }
`;
=======
    transition: all .35s ease-in-out;
  }

`
>>>>>>> edc0da8cd18e5db7ce6a9de7fd0d8ec3e38bfc17
export default Container;
