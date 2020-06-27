import React, { useState, useEffect } from "react";
import Cidade from "../Components/Cidade/Cidade";
import NormalizeData from "../utils/NormalizeData";

import pegarDado from "../utils/pegarDado";
import {
  Container,
  GlobalStyle,
  WeatherPage,
  ContainerCapitais,
  Capitais,
} from "./style";

function App() {
  const [cidade, setCidade] = useState("");
  const [input, setInput] = useState("");

  const [Rio, setRio] = useState(null);
  const [Sp, setSP] = useState(null);
  const [Curitiba, setCuritiba] = useState(null);
  const [Belo, setBelo] = useState(null);
  const [Salvador, setSalvador] = useState(null);
  const [Brasilia, setBrasilia] = useState(null);
  const [Belem, setBelem] = useState(null);
  const [Jp, setJp] = useState(null);
  const [Manaus, setManaus] = useState(null);
  const [Fortaleza, setFortaleza] = useState(null);

  useEffect(function FetchApi() {
    async function pegarNovo() {
      setRio(NormalizeData(await pegarDado("Rio de janeiro")));
      setSP(NormalizeData(await pegarDado("São Paulo")));
      setCuritiba(NormalizeData(await pegarDado("Curitiba")));
      setBelo(NormalizeData(await pegarDado("Belo Horizonte")));
      setSalvador(NormalizeData(await pegarDado("Salvador")));
      setBrasilia(NormalizeData(await pegarDado("Brasilia")));
      setBelem(NormalizeData(await pegarDado("Belém")));
      setJp(NormalizeData(await pegarDado("João Pessoa")));
      setManaus(NormalizeData(await pegarDado("Manaus")));
      setFortaleza(NormalizeData(await pegarDado("Fortaleza")));
    }
    pegarNovo();
  }, []);

  return !Rio ||
    !Sp ||
    !Belo ||
    !Curitiba ||
    !Salvador ||
    !Brasilia ||
    !Belem ||
    !Jp ||
    !Manaus ||
    !Fortaleza ? (
    <h1>Carregando...</h1>
  ) : (
    <>
      <GlobalStyle />
      <Container>
        <WeatherPage cidade={cidade} >
          <h1>Previsão do Tempo</h1>
          {cidade? <Cidade cidade={cidade} temCidade={setCidade} />: '' }

          <div id="divInput">
            <input
              type="text"
              placeholder="Insira aqui o nome da cidade"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setCidade(input);
              }}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>

          <hr />
          <div id="capitais">
            <h2>Capitais</h2>
            <ContainerCapitais cidade={cidade}>
              <Capitais>
                <h4>Min</h4>
                <h4>Max</h4>
                <div></div>
                <p>{Rio.list[0].main.temp_min}º</p>
                <p>{Rio.list[0].main.temp_max}º</p>
                <p>Rio de Janeiro</p>

                <p>{Sp.list[0].main.temp_min}º</p>
                <p>{Sp.list[0].main.temp_max}º</p>
                <p>São Paulo</p>

                <p>{Belo.list[0].main.temp_min}º</p>
                <p>{Belo.list[0].main.temp_max}º</p>
                <p>Belo Horizonte</p>

                <p>{Brasilia.list[0].main.temp_min}º</p>
                <p>{Brasilia.list[0].main.temp_max}º</p>
                <p>Brasília</p>

                <p>{Belem.list[0].main.temp_min}º</p>
                <p>{Belem.list[0].main.temp_max}º</p>
                <p>Belém</p>
              </Capitais>
              <Capitais>
                <h4 class="hide">Min</h4>
                <h4 class="hide">Max</h4>
                <div class="hide"></div>

                <p>{Salvador.list[0].main.temp_min}º</p>
                <p>{Salvador.list[0].main.temp_max}º</p>
                <p>Salvador</p>

                <p>{Curitiba.list[0].main.temp_min}º</p>
                <p>{Curitiba.list[0].main.temp_max}º</p>
                <p>Curitiba</p>

                <p>{Fortaleza.list[0].main.temp_min}º</p>
                <p>{Fortaleza.list[0].main.temp_max}º</p>
                <p>Fortaleza</p>

                <p>{Manaus.list[0].main.temp_min}º</p>
                <p>{Manaus.list[0].main.temp_max}º</p>
                <p>Manaus</p>

                <p>{Jp.list[0].main.temp_min}º</p>
                <p>{Jp.list[0].main.temp_max}º</p>
                <p>João Pessoa</p>
              </Capitais>
            </ContainerCapitais>
          </div>
        </WeatherPage>
      </Container>
    </>
  );
}

export default App;
