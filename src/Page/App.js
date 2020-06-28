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
import axios from "axios";

function App() {
  const [cidade, setCidade] = useState("");
  const [input, setInput] = useState("");

  const [capitais, setCapitais] = useState([
    "Rio de janeiro",
    "São Paulo",
    "Curitiba",
    "Belo Horizonte",
    "Salvador",
    "Brasilia",
    "Belém",
    "João Pessoa",
    "Manaus",
    "Fortaleza",
  ]);

  useEffect(function FetchApi() {
    async function fetchCapitais() {
      setCapitais(
        await Promise.all(
          capitais.map(async function (capital) {
            return NormalizeData(await pegarDado(capital));
          })
        )
      );
    }
    fetchCapitais();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    async function cidadeAtual(latitude, longitude) {
      let cidadePadrao = await axios.get(
        "https://nominatim.openstreetmap.org/reverse?",
        {
          params: {
            lat: latitude,
            lon: longitude,
            format: "jsonv2",
          },
        }
      );
      if (cidadePadrao) {
        setCidade(cidadePadrao.data.address.town);
      }
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      cidadeAtual(latitude, longitude);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <WeatherPage cidade={cidade}>
          <h1>Previsão do Tempo</h1>
          <Cidade cidade={cidade} temCidade={setCidade} />
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
          {capitais.every((element) => typeof element === "string") ? (
            <h1>Carregando...</h1>
          ) : (
            <div id="capitais">
              <h2>Capitais</h2>
              <ContainerCapitais cidade={cidade}>
                <Capitais>
                  <div>
                    <h4>Min</h4>
                    <h4>Max</h4>
                  </div>

                  {capitais.slice(0, 5).map((capital) => {
                    return (
                      <div className="capital" key={capital.city.id}>
                        <p>{capital.list[0].main.temp_min}º</p>
                        <p>{capital.list[0].main.temp_max}º</p>
                        <p>{capital.city.name}º</p>
                      </div>
                    );
                  })}
                </Capitais>
                <Capitais>
                  <div className="hide">
                    <h4>Min</h4>
                    <h4>Max</h4>
                  </div>
                  {capitais.slice(5, 10).map((capital) => {
                    return (
                      <div className="capital" key={capital.city.id}>
                        <p>{capital.list[0].main.temp_min}º</p>
                        <p>{capital.list[0].main.temp_max}º</p>
                        <p>{capital.city.name}º</p>
                      </div>
                    );
                  })}
                </Capitais>
              </ContainerCapitais>
            </div>
          )}
        </WeatherPage>
      </Container>
    </>
  );
}

export default App;
