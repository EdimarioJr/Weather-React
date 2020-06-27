import styled from "styled-components";

export const CidadeClima = styled.div`
  background-color: #fff3e4;
  border: 1px solid #e57c00;
  margin-top: 1%;
  width: 45%;
  padding: 2% 4%;
  display: ${(props) => (props.show ? "block" : "none")};

  .topo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .fa-asterisk {
    cursor: pointer;
  }

  .fa-asterisk,
  .fa-arrow-up,
  .fa-arrow-down {
    color: orange;
  }

  #mainClima {
    color: #505050;
    display: inline-block;
    margin-bottom: 20px;
  }

  .separator {
    height: 2px;
    background-color: #ff8305;
    width: 100%;
    margin: 15px 0;
  }

  
  @media (max-width: 767px) {
    padding: 15px;

    p,
    h4 {
      font-size: 16px !important;
    }

    #last-temp {
    display: none;
  }
  }

  @media (max-width: 500px) {
    width: 102%;
  }

  @media (min-width: 501px) and (max-width: 767px) {
    width: 90%;

  }

  @media(min-width: 768px) and (max-width: 1279px){
    width: 80%;
  }
`;

export const DadosAtmosfericos = styled.div`
  width: 350px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 15px;

  .temps {
    margin-right: 15px;
    h4 {
      display: inline-block;
      margin-left: 5px;
      margin-right: 10px;
      font-weight: 700;
    }
  }

  .dadosAtmosfericos {
    * {
      display: inline-block;
    }
    h4 {
      margin-right: 5px;
      font-weight: 400;
      color: #505050;
    }

    p {
      font-weight: 700;
    }
  }
`;

export const DiasClima = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  padding: 0 10px;
  justify-items: center;

  p {
    display: inline-block;
    color: #ff8305;
    margin-right: 5px;
    place-self: center;
    padding-top: 5px;
    font-weight: 700;
  }

  h4 {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 1280px){
    grid-column-gap: 15px;
  }
`;
