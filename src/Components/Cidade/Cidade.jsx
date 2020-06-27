import React, { useState, useEffect } from "react";
import { CidadeClima, DadosAtmosfericos, DiasClima } from "./style.js";

import Semana from "../../utils/Semana";
import pegarDado from "../../utils/pegarDado";
import NormalizeData from "../../utils/NormalizeData";

export default function Cidade(props) {
  const [clima, setClima] = useState("");
  const [show, setShow] = useState(true);
  let now = new Date();

  useEffect(
    function FetchApi() {
      async function pegarNovo() {
        let climaNovo = ""
        climaNovo = await pegarDado(props.cidade);
        if(climaNovo)
          setClima(NormalizeData(climaNovo));
        setShow(true);
      }
      pegarNovo();
    },
    [props.cidade]
  );

  return (
    <>
      {clima === ""? (
        <h1>Carregando...</h1>
      ) : (
        <CidadeClima show={show}>
          <div className="topo">
            <h4>
              {clima.city.name},{clima.city.country}
            </h4>
            <div
              onClick={() => {
                setShow(false);
                props.temCidade('')
              }}
            >
              <i className="fas fa-asterisk"></i>
            </div>
          </div>

          <h1 id="mainClima">
            {clima.list[0].main.temp}ºC {clima.list[0].weather[0].description}
          </h1>
          <DadosAtmosfericos>
            <div className="temps">
              <i className="fas fa-arrow-up"></i>
              <h4> {clima.list[0].main.temp_max}º</h4>
              <i className="fas fa-arrow-down"></i>
              <h4> {clima.list[0].main.temp_min}º</h4>
            </div>
            <div className="dadosAtmosfericos">
              <h4>Sensação</h4>
              <p> {clima.list[0].main.feels_like}ºC</p>
            </div>
            <div className="dadosAtmosfericos">
              <h4>Vento</h4>
              <p> {clima.list[0].wind.speed} km/h</p>
            </div>
            <div className="dadosAtmosfericos">
              <h4>Umidade</h4>
              <p> {clima.list[0].main.humidity} %</p>
            </div>
          </DadosAtmosfericos>
          <div className="separator"></div>
          <DiasClima>
            <div>
              <h4>{Semana(now.getDay() + 1)}</h4>
              <p>{clima.list[1].main.temp_max}º</p>
              <p>{clima.list[1].main.temp_min}º</p>
            </div>
            <div>
              <h4>{Semana(now.getDay() + 2)}</h4>
              <p>{clima.list[2].main.temp_max}º</p>
              <p>{clima.list[2].main.temp_min}º</p>
            </div>
            <div>
              <h4>{Semana(now.getDay() + 3)}</h4>
              <p>{clima.list[3].main.temp_max}º</p>
              <p>{clima.list[3].main.temp_min}º</p>
            </div>
            <div>
              <h4>{Semana(now.getDay() + 4)}</h4>
              <p>{clima.list[4].main.temp_max}º</p>
              <p>{clima.list[4].main.temp_min}º</p>
            </div>
            <div id="last-temp">
              <h4>{Semana(now.getDay() + 5)}</h4>
              <p>{clima.list[5].main.temp_max}º </p>
              <p>{clima.list[5].main.temp_min}º</p>
            </div>
          </DiasClima>
        </CidadeClima>
      )}
    </>
  );
}
