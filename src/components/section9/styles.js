import styled from 'styled-components';

const Container = styled.div`
 
background-color: white;

 .ChamadaFooter{
    width: 100%;
    padding-top: 10%;
  }

  .ChamadaContrate {
    text-align: center;
    letter-spacing: 15px;
    color: red;
  }

  .subTituloChamada{
    text-align: center; 
  }

  .containerBtnContrate{
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
  }

  .BtnContrate a:hover {
    padding-left: 25px;
    padding-right: 25px;
    transition: all .35s ease-in-out;
  }

`
export default Container;
