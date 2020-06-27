import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border-style: border-box;
    font-family: 'Open Sans', sans-serif;
  }  

body{
    background-image: linear-gradient(to bottom, #ff7f00,#ffb900);
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    width: 90%;
  }

  @media (min-width: 501px) and (max-width: 767px) {
    width: 80%;
  }
`;

export const WeatherPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  width: 100%;
  height: 100vh;

  #capitais {
    width: 53%;

    h2 {
      margin-bottom: 25px;
    }

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  h1 {
    color: white;
    font-size: ${(props) => (props.cidade ? "300%" : "400%")};
    margin: ${(props) => (props.cidade ? "0" : "100px")} 0;
    font-weight: bolder;

  }

  #divInput {
    width: 53%;
    height: 60px;
    border: 1px solid #e57c00;
    margin-top: ${(props) => (props.cidade ? "20px" : "0")};
    margin-bottom: ${(props) => (props.cidade ? "20px" : "100px")};
    display: grid;
    grid-template-columns: 7fr 1fr;

    input {
      font-size: 25px;
      width: 100%;
      border: none;
      padding-left: 30px;
    }

    button {
      width: 100%;
      border: none;
      background-color: white;
      cursor: pointer;
    }
    @media(max-width:500px){
      width: 95%;
    }

    @media(min-width: 501px) and (max-width: 767px){
      width: 97%;
    }

    @media(min-width: 768px) and (max-width:1279px){
      width: 88%;
    }

    @media (max-width: 768px) {
      height: 45px;
      input {
        font-size: 15px;
        padding-left: 15px;
      }
    }
  }

  hr {
    border: 1px solid white;
    width: 100%;
    margin-bottom: 20px;
  }

  h2 {
    color: white;
    font-size: 36px;
    align-self: start;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: ${(props) => (props.cidade ? "180%" : "300%")};
      margin: ${(props) => (props.cidade ? "10px" : "50px")};
    }

    hr {
      width: 110%;
    }
  }

  @media(min-width: 501px) and (max-width: 768px){
    h1{
      font-size: ${(props) => (props.cidade ? "250%" : "350%")};
      margin: ${(props) => (props.cidade ? "10px" : "50px")};
    }
  }
  
  @media(min-width: 1280px){
    padding-bottom: 50px;
  }
`;

export const ContainerCapitais = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${(props) => (props.cidade ? "0" : "30px")};

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }

`;

export const Capitais = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 10px;

  h4 {
    font-weight: 400;
  }

  p {
    font-weight: 700;
  }

  @media (max-width: 500px) {
    width: 100%;
    grid-template-columns: 1fr 1fr 6fr;
    grid-gap: 15px;
    margin-bottom: 15px;

    .hide {
      display: none;
    }
  }
  @media (min-width: 501px) and (max-width: 767px) {
    width: 100%;
    grid-template-columns: 1fr 1fr 6fr;
    grid-gap: 5px;
    margin-right: 10px;
  }
`;
